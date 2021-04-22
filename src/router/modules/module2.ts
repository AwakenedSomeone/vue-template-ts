export default {
  path: '/module2',
  redirect: '/module2/page1',
  component: () => import('@/views/module2/index.vue'),
  children: [
    {
      path: 'page1',
      component: () => import('@/views/module2/page1.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: 'page2',
      component: () => import('@/views/module2/page2.vue'),
      meta: {
        auth: true
      }
    }
  ]
}
