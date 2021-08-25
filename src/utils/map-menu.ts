import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
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
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoutes(menu.children)
      }
    }
  }
  _recurseGetRoutes(menuList)
  return routes
}
import { IBreadcrumb } from '@/base-ui/ToBreadCrumb/index'
// 以路径找菜单
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}
// 以路径找菜单id
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumb?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findmenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findmenu) {
        breadcrumb?.push({ name: menu.name })
        breadcrumb?.push({ name: findmenu.name })
        return findmenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 获取用户类表的按钮权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permission: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permission.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permission
}

export { firstMenu }
