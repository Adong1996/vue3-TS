import { Module } from 'vuex'

import { IRootState } from '../type'

import { reqLogin, reqUserInfo, reqUseMenuIds } from '@/service/login/login'

import type { IAccount } from '@/service/login/login'

import { localStorageSet, localStorageGet } from '@/utils/localStorage'

import router from '@/router/index'

interface ILoginState {
  token: string
  userInfo: any
  menuList: any
}
//泛型类型需要两个参数：S：当前模块中state的类型，R：根store中state类型
const loginModule: Module<ILoginState, IRootState> = {
  //命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menuList: []
    }
  },
  mutations: {
    saveToken(state, token: string) {
      state.token = token
      console.log('result', token)
    },
    saveInfo(state, info: any) {
      state.userInfo = info
    },
    saveMenuIds(state, list: any) {
      state.menuList = list
    }
  },
  getters: {},
  actions: {
    async loginGo({ commit }, palody: IAccount) {
      // 登录请求
      const resLogin = await reqLogin(palody)
      const { id, token } = resLogin.data
      commit('saveToken', token)
      localStorageSet('key_token', token)

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
    localLoginInfo({ commit }) {
      const token = localStorageGet('key_token')
      if (token) {
        commit('saveToken', token)
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