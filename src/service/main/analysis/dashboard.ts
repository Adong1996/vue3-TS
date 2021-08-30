import { backRequest } from '@/service/index'

import { IDataType } from '@/service/type'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
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
