import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { IStstemState } from './type'
import {
  getPageListData,
  deletePageDataById,
  createPageData,
  editPageData
} from '@/service/main/system/system'
const systemModule: Module<IStstemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      // 用户
      usersList: [],
      usersCount: 0,
      // 角色
      roleList: [],
      roleCount: 0,
      // 商品
      goodsList: [],
      goodsCount: 0,
      // 菜单
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  getters: {
    pageListDate: (state) => {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageCountDate: (state) => {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // let pageUrl = ''
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }
      // 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // 将数据存储到state
      const { list, totalCount } = pageResult.data
      const changePageName =
        (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
      // switch (pageName) {
      //   case 'users':
      //     commit('changUerList', list)
      //     commit('changUerCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changRoleList', list)
      //     commit('changRoleCount', totalCount)
      //     break
      // }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      //  获取pageName 和 id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 调用删除网络请求
      await deletePageDataById(pageUrl)
      // 重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      // 重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
