import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './type'

import { getPageListData } from '@/service/main/system/system'

import login from './login/login'
import system from './main/system/system'
//创建 store 实例泛型 state 的类型
export const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: []
    }
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求部门角色的数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      // 保存部门角色的数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})
// 页面刷新本地获取数据保存 store
export function setupStore() {
  store.dispatch('login/localLoginInfo')
  store.dispatch('getInitialDataAction')
}
//typescript 二次封装 store 具有类型检测
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
