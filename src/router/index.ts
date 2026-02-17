import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/home-page',
      name: 'homePage',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/camera-setup',
      name: 'cameraSetup',
      component: () => import('../views/CameraSetup.vue'),
    },
    {
      path: '/collect-data',
      name: 'collectData',
      component: () => import('../views/CollectData.vue'),
    },
    {
      path: '/harigami-data',
      name: 'harigamiData',
      component: () => import('../views/HarigamiData.vue'),
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History.vue'),
    },
  ],
})

export default router
