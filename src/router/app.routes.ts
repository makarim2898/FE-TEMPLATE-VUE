import type { RouteRecordRaw } from 'vue-router'

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/General-Settings',
    name: 'General Settings',
    component: () => import('@/views/GeneralSettings.vue'),
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  },
]
