import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { IStstemState } from './type'
import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<IStstemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changUerList(state, userList: any[]) {
      state.userList = userList
    },
    changUerCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 对页面发送请求
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data
      commit('changUerList', list)
      commit('changUerCount', totalCount)
    }
  }
}
export default systemModule
