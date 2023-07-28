<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="popup"
      :class="[type]"
      :style="{ 'z-index': curZIndex }"
    >
      <div
        class="popup-mask"
        :class="['align-' + align]"
        @click.self="handleMaskClick"
      >
        <div class="popup-content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onUnmounted, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    require: true,
  },
  clickMaskClose: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: 'center',
  },
  align: {
    type: String,
    default: 'center',
  },
});
const emit = defineEmits(['update:modelValue']);

const closePopup = () => {
  emit('update:modelValue', false);
};

const curZIndex = ref(0);
const handleMaskClick = () => {
  if (props.clickMaskClose) {
    closePopup();
  }
};

onUnmounted(() => {
  if (props.modelValue) {
    close();
  }
});
watch(
  () => props.modelValue,
  (newV, oldV) => {
    if (newV) {
      open();
      curZIndex.value = getIndex();
    } else {
      oldV !== undefined && close();
    }
  },
);
</script>
<script>
let openCount = 0;
let ZIndex = 10;

export function getIndex() {
  return ZIndex++;
}
export function open() {
  setTimeout(() => {
    const container = document.querySelector('.app');
    if (container) {
      container.style.height = '100vh';
      container.style.overflow = 'hidden';
      openCount++;
    }
  }, 0);
}
export function close() {
  openCount--;
  if (openCount <= 0) {
    const container = document.querySelector('.app');
    if (container) {
      container.style.height = '';
      container.style.overflow = '';
    }
  }
}
export const popupPool = {};
export function registerPopup(name, openFn) {
  popupPool[name] = openFn;
}
export function openPopup(name, ...args) {
  const fn = popupPool[name];
  if (fn) {
    return fn(...args);
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-to,
.fade-leave-from {
  .popup-content {
    transform: translate(0) scale(1);
  }
}
.fade-enter-from,
.fade-leave-to {
  &.left {
    .popup-content {
      transform: translate(-7.5rem, 0);
    }
  }
  &.right {
    .popup-content {
      transform: translate(7.5rem, 0);
    }
  }
  &.top {
    .popup-content {
      transform: translate(0, -100vh);
    }
  }
  &.bottom {
    .popup-content {
      transform: translate(0, 100vh);
    }
  }
  &.center {
    .popup-content {
      transform: translate(0) scale(0.6);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  .popup-content {
    transition: all 0.3s;
  }
}
.fade-enter-active,
.fade-leave-active {
  &.center {
    .popup-content {
      transition: all 0.3s cubic-bezier(0.27, 0.76, 0.53, 1.22);
    }
  }
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .popup-mask {
    background-color: rgba(0, 0, 0, 0.7);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-top {
      align-items: flex-start;
    }
    &.align-bottom {
      align-items: flex-end;
    }
  }

  .popup-content {
    position: relative;
  }
}
</style>
