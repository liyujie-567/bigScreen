import Vue from 'vue'
import Router from 'vue-router'

// 大屏
import Login from '../components/view/login'
import Index from '../components/view/Index'
import ProductionIndex from '../components/view/productionIndex'

import store from '../store'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

let router = new Router({
  routes: [
    { // 登录
      path: '/',
      name: 'Login',
      meta: {requireAuth: false},
      component: Login
    },
    { // 大屏
      path: '/index',
      name: 'Index',
      meta: {requireAuth: true},
      component: Index
    },
    { // 生产大屏
      path: '/productionIndex',
      name: 'ProductionIndex',
      meta: {requireAuth: true},
      component: ProductionIndex
    },
    {
      path: '*',
      redirect: Login
    }
  ]
})

// 拦截登录，token验证
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    // if (store.state.login.token) {
      next()
    // } else {
    //   next({
    //     path: '/login',
    //     query: {redirect: to.fullPath} // 将要跳转路由的path作为参数，传递到登录页面
    //   })
    // }
  } else {
    next()
  }
})

export default router
