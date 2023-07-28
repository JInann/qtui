<template>
  <demo-block title="基础用法">
    <popup v-model="p1" type="primary">
      <div class="my-popup-content">
        这是内容
      </div>
    </popup>
    <span @click="openClick">打开</span>
  </demo-block>
</template>

<script setup>
import popup from '../index.vue';
import {ref} from 'vue'

const p1 = ref(false)
function openClick(){
  p1.value = true
}
</script>
<style lang="scss" scoped>
.my-popup-content{
width: 1rem;
height: 1rem;
background: #ffffff;
color: #000000;
}
</style>
