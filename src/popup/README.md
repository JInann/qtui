# DemoButton 按钮

### 介绍

popup是一个弹窗组件

### 引入

```js
import Vue from 'vue';
import { popup } from 'qtui';

Vue.use(popup);
```

## 代码演示

### 基础用法

```html
  <template>
    <popup v-model="p1" type="primary">
      <div class="my-popup-content">
        这是内容
      </div>
    </popup>
    <span @click="openClick">打开</span>
  </template>

  <script setup>
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

```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| modelValue          | 进入方向 | _bool_ | `false` |
| type          | 进入方向 | _center/letf/top/right/bottom_ | `center` |
| align | 对齐方式 | _center/letf/top/right/bottom_ | `center`     |
| clickMaskClose | 点击蒙层关闭 | _bool_ | true        |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| update:modelValue  | 弹窗状态改变时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
