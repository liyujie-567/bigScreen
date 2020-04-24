export default {
  userLogin ({commit}, userInfo) {
    commit('USER_LOGIN_IN', userInfo)
  },
  loginOut ({commit}) {
    commit('USER_LOGIN_OUT')
  }
}
