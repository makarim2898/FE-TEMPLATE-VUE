import { createRouter, createWebHistory } from 'vue-router'
import { navigationRoutes } from './navigation.routes'
import { appRoutes } from './app.routes'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayouts.vue'),
    children: navigationRoutes,
  },
  ...appRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
