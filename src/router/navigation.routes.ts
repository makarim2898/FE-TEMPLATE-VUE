import type { RouteRecordRaw } from 'vue-router'

export const navigationRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'homePage',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'Home',
      icon: 'cil-home',
      showInNav: true,
    },
  },
  {
    path: 'camera-setup',
    name: 'cameraSetup',
    component: () => import('@/views/CameraSetup.vue'),
    meta: {
      title: 'Camera Setup',
      icon: 'cil-camera',
      showInNav: true,
    },
  },
  {
    path: 'collect-data',
    name: 'collectData',
    component: () => import('@/views/CollectData.vue'),
    meta: {
      title: 'Collect Data',
      icon: 'cil-task',
      showInNav: true,
    },
  },
  {
    path: 'harigami-data',
    name: 'harigamiData',
    component: () => import('@/views/HarigamiData.vue'),
    meta: {
      title: 'Harigami Data',
      icon: 'cil-chart-line',
      showInNav: true,
    },
  },
  {
    path: 'history',
    name: 'history',
    component: () => import('@/views/History.vue'),
    meta: {
      title: 'History',
      icon: 'cil-history',
      showInNav: true,
    },
  },
]
