import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/Main/Main.vue')
  },
  {
    path: '/test',
    component: () => import('@/test.vue')
  }
]
