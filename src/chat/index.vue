<template>
  <div class="pic9" :style="{ height }">
    <div
      class="pic9-bg"
      :style="{
        'border-image': 'url(' + src + ')',
        'border-width': '0 ' + borderWidth,
        '--scale': parseFloat(height) / 0.9,
        '--bw': borderWidth,
      }"
    ></div>
    <div class="pic9-content">
      <div
        class="t"
        :style="{
          padding: '0 ' + borderWidth,
          fontSize: (parseFloat(height) / 0.9) * 0.28 + 'rem',
        }"
      >
        <slot>爱你哟</slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Chat',
  props: {
    src: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '0.8rem',
    },
  },
  computed: {
    borderWidth() {
      let height = this.height || '1rem';
      let w = 0;
      w = parseFloat(height);
      if (height.endsWith('rem')) {
        w *= 100;
      }
      return ((w / 100) * 72) / 100 + 'rem';
    },
  },
};
</script>
<style lang="scss" scoped>
.pic9 {
  position: relative;
  width: fit-content;
  margin: 0 auto;
  .pic9-bg {
    border-image-slice: 0 50% 0 49% fill !important;
    border-image-repeat: stretch !important;
    height: 100%;
    box-sizing: border-box;
    border-style: solid;
    position: absolute;
    width: 100%;
  }
  .pic9-content {
    position: relative;
    width: fit-content;
    height: 100%;
  }
}
.t {
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
