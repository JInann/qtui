<template>
  <div ref="turntableEl" class="turntable" :class="turntable.elClass.value">
    <div class="turntable-ls">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { waitVal } from '../utils';
import { InjectionKey, ref, computed, watch, provide, onMounted } from 'vue';

const turntableEl = ref<HTMLDivElement>();
const emits = defineEmits(['over']);
const props = withDefaults(
  defineProps<{
    during?: number;
    rotateWhenReady?: boolean;
    offset?: number;
  }>(),
  {
    offset: 0,
    during: 1500,
    rotateWhenReady: false,
  },
);
const duringStyleVal = computed(() => props.during / 1000 + 's');
const drawing = ref(false);
function onOver() {
  drawing.value = false;
  emits('over');
}
const getDeg = (matrixStr: string) => {
  const values = matrixStr.split('(')[1].split(')')[0].split(',');
  const a = values[0];
  const b = values[1];
  const angle = Math.round(
    Math.atan2(parseFloat(b), parseFloat(a)) * (180 / Math.PI),
  );
  return angle;
};
const useTurntable = (
  options = {
    el: () => document.createElement('div'),
  },
) => {
  const aniActive = ref(false);
  const aniReady = ref(false);
  onMounted(() => {
    aniReady.value = true;
  });
  const elClass = computed(() => ({
    'turntable-active': aniActive.value,
    'turntable-ready': props.rotateWhenReady == false ? false : aniReady.value,
  }));
  const fromDeg = ref('0deg');
  const endDeg = ref('0deg');
  const running = ref(false);
  return {
    init() {
      watch(
        [fromDeg, endDeg, duringStyleVal],
        () => {
          options.el().style.setProperty('--fromDeg', fromDeg.value);
          options.el().style.setProperty('--endDeg', endDeg.value);
          options.el().style.setProperty('--duringVal', duringStyleVal.value);
        },
        { immediate: true },
      );
    },
    draw(endIdx: number) {
      if (running.value) {
        return;
      }
      running.value = true;
      fromDeg.value =
        (getDeg(window.getComputedStyle(options.el()).transform) % 360) + 'deg';
      endDeg.value = 720 - (360 / size.value) * endIdx - props.offset + 'deg';
      aniReady.value = false;
      aniActive.value = true;
      setTimeout(() => {
        running.value = false;
        onOver();
        aniActive.value = false;
        aniReady.value = true;
      }, props.during);
    },
    elClass,
  };
};

const turntable = useTurntable({
  // num: props.size,
  el() {
    return turntableEl.value || document.createElement('div');
  },
});
const size = ref(0);
const itemDegArr = ref<string[]>([]);
watch(
  size,
  (newV) => {
    Array.from({ length: newV }).forEach((v, i) => {
      let val = (360 / newV) * i - props.offset + 'deg';
      itemDegArr.value[i] = val;
      cb_list[i](val);
    });
  },
  { immediate: true },
);
const cb_list: any[] = [];
provide(getDegKey, (cb) => {
  size.value++;
  cb_list.push(cb);
});
onMounted(() => {
  turntable.init();
});
defineExpose({
  draw(idx: number) {
    drawing.value = true;
    turntable.draw(idx);
    return waitVal(drawing, (newV: boolean) => newV == false);
  },
});
</script>
<script lang="ts">
export const getDegKey = Symbol('getDeg') as InjectionKey<
  (cb: (val) => void) => void
>;
</script>
<style lang="scss" scoped>
@keyframes turntable-rotate {
  from {
    transform: rotate(var(--fromDeg));
  }
  to {
    transform: rotate(var(--endDeg));
  }
}
@keyframes turntable-readyrotate {
  from {
    transform: rotate(var(--endDeg));
  }
  to {
    transform: rotate(calc(var(--endDeg) + 360deg));
  }
}
.turntable-active {
  animation: turntable-rotate 1.5s ease-in-out 1 forwards;
  animation-duration: calc(var(--duringVal));
}
.turntable-ready {
  animation: turntable-readyrotate 32s linear infinite;
}
.turntable {
  transform: rotate(var(--endDeg));
  position: relative;
  .turntable-ls {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    ::v-deep(.turntable-item) {
      position: absolute;
      width: 7.5rem;
      left: -3.75rem;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: fit-content;
      flex-direction: column;
      transform-origin: bottom center;
    }
  }
}
</style>
