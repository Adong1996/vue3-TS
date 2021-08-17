import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './type'

import login from './login/login'

//创建 store 实例泛型 state 的类型
export const store = createStore<IRootState>({
  state() {
    return {
      count: '1'
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/localLoginInfo')
}
//typescript 二次封装 store 具有类型检测
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
