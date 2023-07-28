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
    <chat
      src="url(https://test-resources-ic.carryu.com.cn/ic/cloud/resources/982252f620631d2d372ad4d75545de1b.png)"
    ></chat>
  </demo-block>
  <demo-block title="设置高度">
    <chat
      src="url(https://test-resources-ic.carryu.com.cn/ic/cloud/resources/982252f620631d2d372ad4d75545de1b.png)"
      height="1.4rem"
    ></chat>
  </demo-block>
  <demo-block title="设置内容">
    <chat
      src="url(https://test-resources-ic.carryu.com.cn/ic/cloud/resources/982252f620631d2d372ad4d75545de1b.png)"
      height="0.6rem"
      >爱你哟爱你哟爱你哟爱你哟爱你哟
    </chat>
  </demo-block>
</template>

<script setup lang="ts">
import chat from '../index.vue';
</script>
<style lang="scss" scoped></style>


```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| height          | 气泡高度(宽度内容自动撑开，不可设置) | _number_ | `0.9rem` |
| src          | 气泡背景url | _number_ | `1500` |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |