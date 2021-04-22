'use strict'
import Axios, { AxiosRequestConfig  } from 'axios'
import store from '../store'
import Qs from 'qs'
// 通过declare module来扩展config
declare module 'axios' {
  export interface AxiosRequestConfig {
    actionKey?: string;
    responseAllData?: false;
    showGlobalError?: true;
  }
}
// 默认请求类型
const defaultContentType = 'application/json'
const config:AxiosRequestConfig = {
  headers: {
    'Content-Type': defaultContentType
  },
  timeout: 60000,
  actionKey: '',
  responseAllData: false,
  showGlobalError: true
}
const axios = Axios.create(config)
axios.interceptors.request.use((req:any) => {
  if (req.actionKey) {
    store.commit('loading/ADD_ACTIONS', req.actionKey)
  }
  if (store.state.app.token) {
    req.headers['token'] = store.state.app.token
  }
  return req
})

axios.interceptors.response.use(
  (response: any) => {
    if (response.config.actionKey) {
      store.commit('loading/REMOVE_ACTIONS', response.config.actionKey)
    }
    if (response.config.showGlobalError) {
      if (!response.data.success) {
        alert(response.data.message)
      }
    }
    return response.config.responseAllData ? response : response.data
  },
  (error) => {
    const config = error && error.config
    if (config) {
      if (config.actionKey) {
        store.commit('loading/REMOVE_ACTIONS', config.actionKey)
      }
      if (config.showGlobalError) {
        alert('系统异常')
      }
    }
    throw error
  }
)

export default axios
