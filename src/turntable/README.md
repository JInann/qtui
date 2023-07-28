# 转盘

### 介绍

turntable是一个转盘组件

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
  <demo-block title="基础用法">
    <turntable ref="turntableVm" :size="7" :during="1500">
      <turntable-item v-for="(item, i) in turntable_config" :key="i" :idx="i">
        <div class="name">{{ item.name }}</div>
        <img :src="item.icon" alt="" class="icon" />
      </turntable-item>
    </turntable>
  </demo-block>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import turntable from '../index.vue';
import turntableItem from '../../turntable-item/index.vue';
const turntable_config = ref<any[]>(
  Array.from({ length: 7 }).fill({
    name: '礼物',
    icon: 'https://h5.carryu.com.cn/wcfe__test/mass2/assets/b1-354ce1e4.png',
  }),
);
</script>
<style lang="scss" scoped>
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
