export default {
  path: '/module1',
  redirect: '/module1/page1',
  component: () => import('@/views/module1/index.vue'),
  children: [
    {
      path: 'page1',
      component: () => import('@/views/module1/page1.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: 'page2',
      component: () => import('@/views/module1/page2.vue'),
      meta: {
        auth: true
      }
    }
  ]
}
