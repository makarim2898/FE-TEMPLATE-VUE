import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layout/DefaultLayout.vue'
import { navigationRoutes } from './navigation.routes'

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      ...navigationRoutes,

      // route biasa (tidak muncul di sidebar)
      // {
      //   path: 'about',
      //   name: 'about',
      //   component: () => import('@/views/About.vue'),
      //   meta: {
      //     showInNav: false,
      //   },
      // },
    ],
  },
]
