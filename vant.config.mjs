export default {
  name: 'qtui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/qtui/',
    },
    packageManager: 'pnpm',
  },
  site: {
    title: 'qtui',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    headHtml: `<script>
    !(function (doc, win) {
      var docEl = doc.documentElement;
      var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      var recalc = function () {
        var clientWidth = docEl.clientWidth;
        var MAX_WIDTH = 750; // 设计稿宽度为750px，html设置字体大小100px，设计稿上30px相当于页面上0.3rem；
        if (!clientWidth) {
          return;
        }
        if (clientWidth >= MAX_WIDTH) {
          docEl.style.fontSize = '100px';
        } else {
          docEl.style.fontSize = 100 * (clientWidth / MAX_WIDTH) + 'px';
        }
      };
      recalc();
      if (!doc.addEventListener) {
        return;
      }
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
  </script><style>body{font-size:16px;}</style>`,
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'popup',
            title: '弹窗',
          },
          {
            path: 'turntable',
            title: '转盘',
          },
          {
            path: 'chat',
            title: '气泡',
          },
          {
            path: 'ani',
            title: 'svga动画',
          },
        ],
      },
    ],
  },
};
