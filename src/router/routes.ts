import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main/Main.vue')
    // children: []  -> 根据menuList动态决定
  },
  // not find page
  {
    path: '/:pathMatch(.*)*',
    name: 'no-find',
    component: () => import('@/views/NoFind/NoFind.vue')
  }
]
