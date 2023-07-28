<template>
  <demo-block title="基础用法">
    <popup v-model="p1" type="primary">
      <div class="my-popup-content">
        这是内容
      </div>
    </popup>
    <popup v-model="p2" type="primary">
      <div class="my-popup-content">
        这是内容2
      </div>
    </popup>
    <div @click="openClick">打开</div>
    <div @click="openClick2">打开方式2</div>
  </demo-block>
</template>

<script setup>
import popup,{registerPopup,openPopup}  from '../index.vue';
import {ref} from 'vue'

const p1 = ref(false)
const p2 = ref(false)

registerPopup('p2',()=>{
  p2.value=true
})

function openClick(){
  p1.value = true
}
function openClick2(){
  openPopup('p2')
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
