# 转盘

### 介绍

turntable是一个转盘组件

### 引入

```js
import Vue from 'vue';
import { turntable,turntableItem } from 'qtui';

Vue.use(turntable);
Vue.use(turntableItem);
```

## 代码演示

### 基础用法

```html
<template>
  <demo-block title="基础用法">
    <div class="my-turntable">
      <turntable ref="turntableVm" :during="3000" :rotate-when-ready="true">
        <turntable-item v-for="(item, i) in turntable_config" :key="i" :idx="i">
          <div class="name">{{ item.name }}</div>
          <img :src="item.icon" alt="" class="icon" />
        </turntable-item>
      </turntable>
    </div>
    <div class="start-btn" @click="handleClick">
      点击抽奖（结果下标：{{ resultIdx }}）
    </div>
  </demo-block>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const turntable_config = ref<any[]>(
  Array.from({ length: 8 }).map((v, i) => ({
    name: '下标' + i,
    icon: 'https://h5.carryu.com.cn/wcfe__test/mass2/assets/b1-354ce1e4.png',
  })),
);
setTimeout(() => {
  turntable_config.value = Array.from({ length: 5 }).map((v, i) => ({
    name: '下标' + i,
    icon: 'https://h5.carryu.com.cn/wcfe__test/mass2/assets/b1-354ce1e4.png',
  }));
  turntableVm.value && turntableVm.value.updateSize();
}, 5000);
const turntableVm = ref<InstanceType<typeof turntable>>();
const resultIdx = ref(0);
function handleClick() {
  if (turntableVm.value) {
    resultIdx.value = ~~(Math.random() * turntable_config.value.length);
    turntableVm.value.draw(resultIdx.value);
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

```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| offset          | 偏移角度 | _number_ | `0` |
| during          | 动画播放时间 | _number_ | `1500` |
| rotateWhenReady | 默认动画 | _bool_ | `false`     |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| update:modelValue  | 弹窗状态改变时触发 | _event: MouseEvent_ |

### Methods

| 方法名 | 说明       | 参数            |
| ------ | ---------- | ------------------- |
| draw  | 播放抽奖动画 | idx：_number_ 结束下标 |
| updateSize  | 奖励数量更新 |  |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
