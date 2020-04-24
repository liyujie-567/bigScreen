import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'
import 'lib-flexible/flexible.js'
import echarts from 'echarts'
import npmAssembly from 'npm-assembly'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts
Vue.use(Element);
Vue.use(npmAssembly);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
