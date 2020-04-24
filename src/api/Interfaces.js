import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router/index'
import util from '../assets/js/util'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

axios.defaults.timeout = 30000;
axios.defaults.baseURL ='';

const isPublished = true;
const allProject = process.env.API_HOST; // 公用接口
const server = "../";

/**
 * 接口请求列表
 * isPublished 发布状态
 * projectName 接口根路径
 * @param url
 */
export function apiConfig(url, param) {
  let requsetURL = sessionStorage.getItem('requestUrl')

  if (!requsetURL && url != 'findInfo') {
    // Toast('用户登录信息失效，请重新登录..');
    setTimeout(() => {
      router.push({
        path: '/login'
      })
    }, 4000)

  }
  let interfaces = {
    // 用户登录 post请求
    loginIn: requsetURL + "/enter/login",

    //大屏接口
    checkAuthLsdFlag:  requsetURL + "/user/checkAuthLsdFlag/" + param, // 检查授权大屏标记
    getCacheLineId:  requsetURL + "/enter/getCacheLineId/" + param, // 获取缓存产线ID
    setCacheLineId:  requsetURL + "/enter/setCacheLineId", // 设置缓存产线ID
    lineQueryListId:  requsetURL + "/line/findByUserId/" + param, // 产线user信息列表
    planOutPut:  requsetURL + "/lose/planOutPut", // 大屏产出记录
    findUserInfo:  requsetURL + "/user/findUserInfo", // 获取用户信息
    signature:  requsetURL + "/user/signature", // 签字确认
    planLoss:  requsetURL + "/lose/planLoss", // 大屏计划损失记录
    queryLatelyMeetList:  requsetURL + "/meet/queryLatelyMeetList/" + param, // 查询近期会议集合,
    addLoss:  requsetURL + "/loseNew/addLoss", // 添加计划损失列表数据
    addLossBig:  requsetURL + "/loseNew/addLossBig", // 大屏添加计划损失列表数据
  };
  return interfaces[url]
}

/**
 * 公用接口post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function allPost(url,data = {}){
  //判断是否是静态请求，如是静态请求发送fetch
  if(!isPublished) {
    return fetch(url, data)
  }else {
    return new Promise((resolve,reject) => {
      url = allProject + url;
      axios.post(url, data)
        .then(response => {
          resolve(response.data);
        },err => {
          reject(err)
        })
    })
  }
}

/**
 * 封装fileUpload请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function postFile(url,data = {}){
  //判断是否是静态请求，如是静态请求发送fetch
  if(!isPublished) {
    return fetch(url, data)
  }else {
    return new Promise((resolve,reject) => {
      // url = projectName + url;
      axios.post(url, data)
        .then(response => {
          resolve(response.data);
        },err => {
          reject(err)
        })
    })
  }
}

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    // isPublished ? url = projectName + url : url;
    axios.get(url,{params: params})
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url,data = {}){
  //判断是否是静态请求，如是静态请求发送fetch
  if(!isPublished) {
    return fetch(url, data)
  }else {
    return new Promise((resolve,reject) => {
      // url = projectName + url;
      axios.post(url, data)
        .then(response => {
          resolve(response.data);
        },err => {
          reject(err)
        })
    })
  }
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // if(sessionStorage.getItem("token")){
    //   config.headers = {
    //     'Authorization': 'Bearer ' + sessionStorage.getItem("token")
    //   };
      // Toast.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      //   overlay: true
      // });
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    // if (response.data.code == '-1') {
    //   Message(response.data.desc)
    // } else if (response.data.code == '401') {
    //   Message('用户登录信息失效，请重新登录..')
    //   setTimeout(() => {
    //     router.push({
    //       path: '/login'
    //     })
    //   }, 2000)
    // }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
);
