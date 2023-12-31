import { watch } from 'vue';
console.info('@fkjs/qtui 文档地址:https://jinann.github.io/qtui/#/home');
const u = navigator.userAgent;
const Agents = [
  'Android',
  'iPhone',
  'SymbianOS',
  'Windows Phone',
  'iPad',
  'iPod',
];
let mobile = false;
for (let v = 0; v < Agents.length; v++) {
  if (u.indexOf(Agents[v]) > -1) {
    mobile = true;
    break;
  }
}
export const Os = {
  // 移动终端浏览器版本信息
  mobile, // 是否为移动终端
  ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
  android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端
  iphone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
  ipad: u.indexOf('iPad') > -1, // 是否iPad
  /**
   * OS的判断
   * @return {[type]} [description]
   */
  getOsType() {
    const agent = navigator.userAgent.toLowerCase();
    let osType = '';
    let index: any = '';
    let version = '';
    if (/android/i.test(navigator.userAgent)) {
      index = agent.indexOf('android');
      version = agent.substr(index + 8, 3);
      osType = `Android ${version}`;
    }
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      index = agent.indexOf('os');
      version = agent.substr(index + 3, 4);
      osType = `iOS ${version}`;
    }
    if (
      /Linux/i.test(navigator.userAgent) &&
      !/android/i.test(navigator.userAgent) &&
      !/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
    ) {
      osType = 'Linux';
    }
    if (/windows|win32/i.test(navigator.userAgent)) {
      osType = 'windows32';
    }
    if (/windows|win64/i.test(navigator.userAgent)) {
      osType = 'windows64';
    }
    return osType;
  },
};

export const waitVal = (v: any, fn: any) =>
  new Promise((res) => {
    const unwatch = watch(v, (...args) => {
      if (fn(...args)) {
        unwatch();
        res(true);
      }
    });
  });
