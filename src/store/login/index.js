import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  token: sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "",
  realName: sessionStorage.getItem("realName") ? sessionStorage.getItem("realName") : "",
  username: sessionStorage.getItem("username") ? sessionStorage.getItem("username") : "",
  userId: sessionStorage.getItem("userId") ? sessionStorage.getItem("userId") : ""
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
