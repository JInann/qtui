<template>
  <demo-block title="基础用法">
    <div class="my-turntable">
      <turntable ref="turntableVm" :size="7" :during="1500">
        <turntable-item v-for="(item, i) in turntable_config" :key="i" :idx="i">
          <div class="name">{{ item.name }}</div>
          <img :src="item.icon" alt="" class="icon" />
        </turntable-item>
      </turntable>
    </div>
    <div class="start-btn" @click="handleClick">点击抽奖</div>
  </demo-block>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import turntable from '../index.vue';
import turntableItem from '../../turntable-item/index.vue';
const turntable_config = ref<any[]>(
  Array.from({ length: 7 }).map((v, i) => ({
    name: '下标' + i,
    icon: 'https://h5.carryu.com.cn/wcfe__test/mass2/assets/b1-354ce1e4.png',
  })),
);
const turntableVm = ref<InstanceType<typeof turntable>>();
function handleClick() {
  if (turntableVm.value) {
    turntableVm.value.draw(3);
  }
}
</script>
<style lang="scss" scoped>
.my-turntable {
  width: 7.5rem;
  height: 7.5rem;
  border: 0.01rem solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.turntable-item {
  padding-bottom: 0.4rem;
}
.icon {
  width: 1rem;
  height: 1rem;
}
.name {
  font-size: 0.28rem;
}
</style>
