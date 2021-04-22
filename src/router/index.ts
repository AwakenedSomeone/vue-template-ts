import { createRouter, createWebHashHistory } from 'vue-router'
import config from './config'
import store from '../store'

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: config, 
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.state.app.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
  return false
})

export default router
