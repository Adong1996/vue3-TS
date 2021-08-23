import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'
import { localStorageGet } from '@/utils/localStorage'
import { firstMenu } from '@/utils/map-menu'

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
  // 自定义重定向
  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
