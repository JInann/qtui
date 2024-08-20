<template>
  <div class="turntable-item" :style="{ transform: 'rotate(' + deg + ')' }">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { getDegKey } from '../turntable/index.vue';
import { inject, ref } from 'vue';
const getDeg = inject(getDegKey, () => void 0);
const deg = ref('0deg');
getDeg((val) => {
  deg.value = val;
});
</script>
<script lang="ts">
export default {
  name: 'TurntableItem',
};
</script>
<style lang="scss" scoped>
.turntable-item {
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
</style>
