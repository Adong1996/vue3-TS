import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'
import { localStorageGet } from '@/utils/localStorage'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localStorageGet('key_token')
    if (!token) {
      return '/login'
    }
  }
})
export default router
