import { login, loginData, getUser } from '../../api/login'
import { setToken, getToken } from '../../utils/token'
import router from '../../router'
import { Commit } from 'vuex';
let token = getToken()

export interface StateUser {
  token: string | null;
  userInfo: {}
}
const state:StateUser = {
  token: token,
  userInfo: {}
}

const mutations = {
  SET_USERINFO (state:StateUser, data:any) {
    state.userInfo = data
  },
  SET_TOKEN (state:StateUser, token:string) {
    state.token = token
    setToken(token)
  }
}

const actions = {
  login (context: {commit: Commit }, params:loginData) {
    login(params).then((res:any) => {
      if (res.success) {
        context.commit('SET_TOKEN', res.mapResult.token)
        router.push('/')
      }
    })
  },
  getUser (context: {commit: Commit }) {
    getUser().then((res:any) => {
      if (res.success) {
        context.commit('SET_USERINFO', res.data)
      }
    })
  }
}

export default { namespaced: true, state, mutations, actions }
