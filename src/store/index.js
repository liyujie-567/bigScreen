import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入模块
import moduleLogin from './login'

export default new Vuex.Store({
  modules: {
    login: moduleLogin,
  }
})
