<template>
  <div
    class="turntable-item"
    :style="{ transform: 'rotate(' + getDeg() + ')' }"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { getDegKey } from '../turntable/index.vue';
import { inject } from 'vue';
const getDeg = inject(getDegKey, () => '');
</script>
