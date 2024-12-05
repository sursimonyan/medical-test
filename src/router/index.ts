import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NursesView from '@/views/NursesView.vue'
import DoctorsView from '@/views/DoctorsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/nurses',
      name: 'nurses',
      component: NursesView,
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: DoctorsView,
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'notfound', 
      component: NotFoundView,
    },
  ],
})

export default router
