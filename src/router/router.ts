import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/App.vue'),
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    }
  ]
})

export default router
