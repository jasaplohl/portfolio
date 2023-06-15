import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          component: () => import('@/views/home/views/IntroductionComponent.vue'),
        },
        {
          path: 'about',
          component: () => import('@/views/home/views/AboutMeComponent.vue'),
        },
        {
          path: 'projects',
          component: () => import('@/views/home/views/ProjectsComponent.vue'),
        },
        {
          path: 'technologies',
          component: () => import('@/views/home/views/TechnologiesComponent.vue'),
        },
        {
          path: 'contact',
          component: () => import('@/views/home/views/ContactComponent.vue'),
        }
      ]
    }
  ]
})

export default router
