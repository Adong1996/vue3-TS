import { backRequest } from '@/service/index'

import { IDataType } from '@/service/type'

enum DashboardAPI {
  amountList = '/goods/amount/list',
  goodsSaleTop10 = '/goods/sale/top10',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getAmountList() {
  return backRequest.get({
    url: DashboardAPI.amountList,
    headers: {
      needToken: true
    }
  })
}
export function getGoodsSaleTop10() {
  return backRequest.get({
    url: DashboardAPI.goodsSaleTop10,
    headers: {
      needToken: true
    }
  })
}
export function getCategoryGoodsCount() {
  return backRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount,
    headers: {
      needToken: true
    }
  })
}
export function getCategoryGoodsSale() {
  return backRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale,
    headers: {
      needToken: true
    }
  })
}
export function getCategoryGoodsFavor() {
  return backRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor,
    headers: {
      needToken: true
    }
  })
}
export function getAddressGoodsSale() {
  return backRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale,
    headers: {
      needToken: true
    }
  })
}
