import { Module } from 'vuex'

import { IRootState } from '../type'

import { reqLogin, reqUserInfo, reqUseMenuIds } from '@/service/login/login'

import type { IAccount } from '@/service/login/login'

import { localStorageSet, localStorageGet } from '@/utils/localStorage'

import router from '@/router/index'

import { mapMenu2Routes, mapMenusToPermissions } from '@/utils/map-menu'
export interface ILoginState {
  token: string
  userInfo: any
  menuList: any
  permission: string[]
}
//泛型类型需要两个参数：S：当前模块中state的类型，R：根store中state类型
const loginModule: Module<ILoginState, IRootState> = {
  //命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menuList: [],
      permission: []
    }
  },
  mutations: {
    // 保存对应的数据到store
    saveToken(state, token: string) {
      state.token = token
    },
    saveInfo(state, info: any) {
      state.userInfo = info
    },
    saveMenuIds(state, list: any) {
      state.menuList = list

      // menuList ->(映射) routes
      const routes = mapMenu2Routes(state.menuList)

      // 将routes 添加到 路由 main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //获取用户按钮的权限
      const permission = mapMenusToPermissions(list)
      state.permission = permission
    }
  },
  getters: {},
  actions: {
    async loginGo({ commit, dispatch }, palody: IAccount) {
      // 登录请求
      const resLogin = await reqLogin(palody)
      const { id, token } = resLogin.data
      commit('saveToken', token)
      localStorageSet('key_token', token)

      // 初始化数据请求
      dispatch('getInitialDataAction', null, { root: true })

      //请求用户信息
      const resInfo = await reqUserInfo(id)
      const info = resInfo.data
      commit('saveInfo', info)
      localStorageSet('usersInfo', info)

      //获取角色菜单信息
      const resMenuIds = await reqUseMenuIds(id)
      const menuIds = resMenuIds.data
      commit('saveMenuIds', menuIds)
      localStorageSet('menuIds', menuIds)
      // 登录后跳转
      router.push('/main')
    },
    // 本地加载数据
    localLoginInfo({ commit, dispatch }) {
      const token = localStorageGet('key_token')
      if (token) {
        commit('saveToken', token)
        // 初始化数据请求
        dispatch('getInitialDataAction', null, { root: true })
      }
      const saveInfo = localStorageGet('usersInfo')
      if (saveInfo) {
        commit('saveInfo', saveInfo)
      }
      const menuIds = localStorageGet('menuIds')
      if (menuIds) {
        commit('saveMenuIds', menuIds)
      }
    }
  }
}

export default loginModule
