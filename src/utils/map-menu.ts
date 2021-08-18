import { RouteRecordRaw } from 'vue-router'

export function mapMenu2Routes(menuList: any[]) {
  const routes: RouteRecordRaw[] = []
  // 1. 先去加载映射好的所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // require.context -> webpack 内置函数
  const fileRoutes = require.context('@/router/main', true, /\.ts/)
  fileRoutes.keys().forEach((element) => {
    //  commonjs 函数
    const route = require('../router/main' + element.split('.')[1])
    allRoutes.push(route.default)
  })
  // fileRoutes.keys
  // 2. 根据菜单获取需要的添加的routes
  const _recurseGetRoutes = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoutes(menu.children)
      }
    }
  }
  _recurseGetRoutes(menuList)
  return routes
}
