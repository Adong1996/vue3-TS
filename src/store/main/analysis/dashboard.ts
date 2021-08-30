import { Module } from 'vuex'

import { IRootState } from '@/store/type'
import { IDashboardState } from './type'

import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardAction({ commit }) {
      const addressGoodsSaleReslut = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsSaleReslut.data)
      const categoryGoodsCountReslut = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCountReslut.data)
      const categoryGoodsFavorReslut = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorReslut.data)
      const categoryGoodsSaleReslut = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSaleReslut.data)
    }
  }
}

export default dashboardModule
