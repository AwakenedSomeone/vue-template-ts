export const setToken = (token:string) => {
  window.sessionStorage.setItem('token', token)
}

export const getToken = () => {
  return window.sessionStorage.getItem('token')
}
