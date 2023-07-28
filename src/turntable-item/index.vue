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
<script>
export default {
  name: 'TurntableItem',
};
</script>
