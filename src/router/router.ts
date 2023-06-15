import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('@/views/introduction/IntroductionView.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/about/AboutView.vue'),
    },
    {
      path: '/projects',
      component: () => import('@/views/projects/ProjectsView.vue'),
    },
    {
      path: '/technologies',
      component: () => import('@/views/technologies/TechnologiesView.vue'),
    },
    {
      path: '/contact',
      component: () => import('@/views/contact/ContactComponent.vue'),
    }
  ]
})

export default router
