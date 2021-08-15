import { createStore } from 'vuex'

import { IRootState } from './type'

import login from './login/login'

//创建 store 实例泛型 state 的类型
export const store = createStore<IRootState>({
  state() {
    return {}
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
