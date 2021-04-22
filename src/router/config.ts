import module1 from './modules/module1'
import module2 from './modules/module2'
const config = [
  {
    path: '/',
    redirect: '/module1/page1'
  },
  {
    path: '/login',
    component: () => import('@/views/basic/Login.vue')
  },
  module1,
  module2
]

export default config
