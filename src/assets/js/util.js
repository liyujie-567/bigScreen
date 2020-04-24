let util = {
  /*
  转译时间格式
  params: value (Number) 时间戳
  */
  formatDate(value, type) {
    if (value == null) {
      return '';
    } else {
      let out = '';
      let date = new Date(value);
      let y = date.getFullYear();// 年
      let MM = date.getMonth() + 1;// 月
      MM = MM < 10 ? ('0' + MM) : MM;
      let d = date.getDate();// 日
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();// 时
      h = h < 10 ? ('0' + h) : h;
      let m = date.getMinutes();// 分
      m = m < 10 ? ('0' + m) : m;
      let s = date.getSeconds();// 秒
      s = s < 10 ? ('0' + s) : s;
      if (type == 'all') {
        out = y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
      } else if (type == 'y') {
        out = y
      } else if (type == 'ymdhm') {
        out = y + '-' + MM + '-' + d + ' ' + h + ':' + m
      } else if (type == 'ymd') {
        out = y + '-' + MM + '-' + d
      } else if (type == 'ym') {
        out = y + '-' + MM
      } else if (type == 'hm') {
        out = h + ':' + m
      }
      return out;
    }
  },
  /**
  * 加密协议静态资源获取
  * params: url (String) 访问地址
  */
  checkurl(url){
    let commonurl = url.split('//')[1]
    let  first = commonurl.split(':')[0]
    let second = '/' + commonurl.split(':')[1].split('/')[1]
    url = "http://" + first + second
    return url;
  },

  // 节流函数(指定时间间隔内只会执行一次任务。)
  throttle (fn) {
    // 4、通过闭包保存一个标记
    let canRun = true
    return function () {
      // 5、在函数开头判断标志是否为 true，不为 true 则中断函数
      if (!canRun) {
        return
      }
      // 6、将 canRun 设置为 false，防止执行之前再被执行
      canRun = false
      // 7、定时器
      setTimeout(() => {
        fn.call(this, arguments)
        // 8、执行完事件（比如调用完接口）之后，重新将这个标志设置为 true
        canRun = true
      }, 1000)
    }
  },

  /**
   * @desc 函数防抖(任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。)
   * @param func 函数
   * @param wait 延迟执行毫秒数
   * @param immediate true 表立即执行，false 表非立即执行
   */
  debounce (func, wait, immediate) {
    let timeout
    return function () {
      let self = this
      let args = arguments
      if (timeout) clearTimeout(timeout)
      if (immediate) {
        let callNow = !timeout
        timeout = setTimeout(() => {
          timeout = null
        }, wait)
        if (callNow) func.apply(self, args)
      } else {
        timeout = setTimeout(function () {
          func.apply(self, args)
        }, wait)
      }
    }
  },
  // 数组去重
  uniqueArray (arr) {
    if (!Array.isArray(arr)) {
      return
    }
    return [...new Set(arr)]
  },
  // 对比两个对象的值是否完全相等 返回值 true/false
  isObjectValueEqual (a, b) {
    //取对象a和b的属性名
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    //判断属性名的length是否一致
    if (aProps.length != bProps.length) {
      return false;
    }
    //循环取出属性名，再判断属性值是否一致
    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  },
  // 判断当前设备是pad 还是 大屏
  os_equipment () {
    let ua = navigator.userAgent,
      isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
      isAndroid = /(?:Android)/.test(ua),
      isFireFox = /(?:Firefox)/.test(ua),
      isChrome = /(?:Chrome|CriOS)/.test(ua),
      isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
      isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      isPc = !isPhone && !isAndroid && !isSymbian;
      return {
        isWindowsPhone: isWindowsPhone,
        isSymbian: isSymbian,
        isAndroid: isAndroid,
        isFireFox: isFireFox,
        isChrome: isChrome,
        isTablet: isTablet,
        isPhone: isPhone,
        isPc: isPc
      }
  }
};

export default util
