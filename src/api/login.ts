import request from '../utils/request'
export interface loginData {
  username: string;
  password: string;
}
export const login = (data:loginData) => {
  return request({
    url: '/user/nostate/login/openLogin',
    method: 'post',
    params:data,
    actionKey: 'login-login'
  })
}

export const getUser = () => {
  return request({
    url: '/api/getUser',
    method: 'get'
  })
}
