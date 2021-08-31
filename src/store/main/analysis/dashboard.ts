import { Module } from 'vuex'

import { IRootState } from '@/store/type'
import { IDashboardState } from './type'

import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getAmountList,
  getGoodsSaleTop10
} from '@/service/main/analysis/dashboard'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      amountList: [],
      goodsSaleTop10: []
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
    },
    changeAmountList(state, list) {
      state.amountList = list
    },
    changeGoodsSaleTop10(state, list) {
      state.goodsSaleTop10 = list
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
      const changeAmountListReslut = await getAmountList()
      commit('changeAmountList', changeAmountListReslut.data)
      const changeGoodsSaleTop10Reslut = await getGoodsSaleTop10()
      commit('changeGoodsSaleTop10', changeGoodsSaleTop10Reslut.data)
    }
  }
}

export default dashboardModule
