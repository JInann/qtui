<template>
  <div ref="el" class="svga ani" :class="{ stretch }"></div>
</template>
<script lang="ts">
import SVGA from 'svgaplayerweb';
import { onMounted, ref, watch } from 'vue';
export type svgaProps = {
  src: string;
  loops?: number;
  clearsAfterStop?: boolean;
  fillMode?: 'Forward' | 'Backward';
  autoplay?: boolean;
  stretch?: boolean;
};
const animationStore: { [path: string]: Promise<SVGA.VideoEntity> } = {};
export const load = (path: string) => {
  if (!animationStore[path]) {
    animationStore[path] = new Promise((resolve, reject) => {
      const parser = new SVGA.Parser();
      parser.load(path, resolve, reject);
    });
  }
  return animationStore[path];
};
function initAni(
  player: SVGA.Player,
  options: svgaProps,
  cb: (eventName?: string, eventDetail?: unknown) => void = () => void 0,
) {
  const path = options.src;
  load(path).then((videoItem) => {
    player.setVideoItem(videoItem);
    player.loops = options.loops || 0;
    player.clearsAfterStop =
      options.clearsAfterStop != undefined ? options.clearsAfterStop : true;
    player.fillMode = options.fillMode || 'Forward';
    player.clear();
    if (options.autoplay) {
      player.startAnimation();
    }
    cb('init');
    player.onFinished(() => {
      cb('finished');
    });
    player.onFrame((frame) => {
      cb('frame', frame);
    });
    player.onPercentage((percentage) => {
      cb('percentage', percentage);
    });
  });
}
export default {
  name: 'Ani',
};
</script>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    src: string;
    loops?: number;
    clearsAfterStop?: boolean;
    fillMode?: 'Forward' | 'Backward';
    autoplay?: boolean;
    stretch?: boolean;
  }>(),
  {
    loops: 0,
    clearsAfterStop: true,
    autoplay: true,
    fillMode: 'Forward',
    stretch: false,
  },
);
const emit = defineEmits(['init', 'finished', 'frame', 'percentage']);
const player = ref<SVGA.Player>(null as unknown as SVGA.Player);
const el = ref<HTMLDivElement>();

load(props.src);
watch(props, () => {
  if (player.value) {
    initAni(player.value, props, emit as any);
  }
});
onMounted(function () {
  if (el.value) {
    player.value = new SVGA.Player(el.value);
  }
  initAni(player.value, props, emit as any);
});
defineExpose({
  player,
});
</script>
<style lang="scss" scoped>
.svga {
  overflow: hidden;
  canvas {
    max-width: 100%;
    max-height: 100%;
    display: block;
    transform: none !important;
  }
  &.stretch {
    canvas {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
