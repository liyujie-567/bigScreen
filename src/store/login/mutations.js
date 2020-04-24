import * as type  from './mutation-types.js'
import { apiConfig, post } from '@/api/Interfaces'
import router from '../../router'
import { Message } from 'element-ui';
import util from '../../assets/js/util'

export default {
  [type.USER_LOGIN_IN](state, userInfo){
    let param = {
      username: userInfo.loginName,
      password: userInfo.loginPwd
    }
    post(apiConfig('loginIn'), param).then((res) => {
      if(res.code === '200') {
        sessionStorage.setItem("token", res.data.accessToken); // token
        sessionStorage.setItem("loginTime", res.data.loginTime); // loginTime
        sessionStorage.setItem("realName", res.data.userInfo.realName); // 姓名
        sessionStorage.setItem("username", res.data.userInfo.username); // 用户名
        sessionStorage.setItem("userId", res.data.userInfo.userId); // 用户id
        state.token = res.data.accessToken;
        state.loginTime = res.data.loginTime;
        state.realName = res.data.userInfo.realName;
        state.username = res.data.userInfo.username;
        state.userId = res.data.userInfo.userId;

        if (util.os_equipment().isTablet) {
          setTimeout(() => {
            router.push({
              path: '/main/plan'
            })
          }, 2000)
        } else {
          // 判断是否有权限
          post(apiConfig('checkAuthLsdFlag', res.data.userInfo.userId)).then((res) => {
            if(res.code === '200') {
              if (res.data) {
                Message({
                  showClose: true,
                  message: '登录成功，即将跳转大屏...',
                  type: 'success'
                });
                setTimeout(() => {
                  router.push({
                    path: '/bigIndex'
                  })
                }, 2000)
              } else {
                Message('无权限登录大屏！')
              }
            } else {
              Message(res.desc)
            }
          })
        }
      } else {
        Message(res.desc)
      }
    })
  }
}
