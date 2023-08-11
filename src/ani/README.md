# svga动画组件

### 属性

* 文件路径由src字段传入，Player初始化属性由props传入。例`<ani src="test.svga" :loops="3" autoplay />`


* stretch为true时，动画区域拉伸至外层盒子大小


支持的属性：

| 属性名          | 类型      | 默认值         | 必传 | 说明 |
| --------------- | --------- | -------------- | ---- | --------------- |
| src             | String    |                | ✔️    | 文件路径 |
| loops           | Number    | 0 （循环播放） |      | 循环次数 |
| clearsAfterStop | Boolean   | true           |      |  |
| fillMode        | 'Forward'\|'Backward' | Forward        |      |  |
| autoplay        | Boolean   | true           |      | 自动播放 |
| stretch | Boolean | false | | 是否拉伸 |

### 事件

事件使用vue事件监听即可：

```html
<ani @Finished="handleFn" />
```

 支持的事件：

| 事件名     | 说明                                    | 回调参数   |
| ---------- | --------------------------------------- | ---------- |
| init       | 组件mounted后且动画加载完成，播放前触发 | 无         |
| finished   | 动画播放完成                            | 无         |
| frame      | 播放到某帧                              | 当前帧     |
| percentage | 播放百分比                              | 当前百分比 |

### 获取实例

通过vue实例的player属性获取player实例。

```javascript
this.$refs.aniVm.player.value
```

### 方法

#### player

- startAnimation(reverse: boolean = false); - 从第 0 帧开始播放动画
- startAnimationWithRange(range: {location: number, length: number}, reverse: boolean = false); - 播放 [location, location+length] 指定区间帧动画
- pauseAnimation(); - 暂停在当前帧
- stopAnimation(); - 停止播放动画，如果 clearsAfterStop === true，将会清空画布
- setContentMode(mode: "Fill" | "AspectFill" | "AspectFit"); - 设置动画的拉伸模式
- setClipsToBounds(clipsToBounds: boolean); - 如果超出盒子边界，将会进行裁剪
- clear(); - 强制清空画布
- stepToFrame(frame: int, andPlay: Boolean); - 跳到指定帧，如果 andPlay === true，则在指定帧开始播放动画
- stepToPercentage(percentage: float, andPlay: Boolean); - 跳到指定百分比，如果 andPlay === true，则在指定百分比开始播放动画
- setImage(image: string, forKey: string, transform: [a, b, c, d, tx, ty]); - 设定动态图像, transform 是可选的, transform 用于变换替换图片
- setText(text: string | {text: string, family: string, size: string, color: string, offset: {x: float, y: float}}, forKey: string); - 设定动态文本
- clearDynamicObjects(); - 清空所有动态图像和文本


### 示例代码

```html
<template>
   <ani
      src="https://jyb-site.oss-cn-hongkong.aliyuncs.com/1615863486779.6.svga"
    />
</template>

<script setup lang="ts">
import ani from '../index.vue';
</script>
<style lang="scss" scoped>
.ani {
  width: 3.75rem;
  height: 5.14rem;
}
</style>

```



### 文档地址
[官方文档 https://github.com/svga/SVGAPlayer-Web/blob/master/README.zh.md](https://github.com/svga/SVGAPlayer-Web/blob/master/README.zh.md)

[语雀 https://www.yuque.com/wbpeng/yvywta/emni6m](https://www.yuque.com/wbpeng/yvywta/emni6m)
