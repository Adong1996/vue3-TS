export interface IDashboardState {
  // 每个商品的个数
  categoryGoodsCount: any[]
  // 每个商品的销量
  categoryGoodsSale: any[]
  // 每个商品的收藏
  categoryGoodsFavor: any[]
  // 不同城市的销量
  addressGoodsSale: any[]
  // 商品数据统计的数量
  amountList: any[]
  // 销量前10的商品数量
  goodsSaleTop10: any[]
}
