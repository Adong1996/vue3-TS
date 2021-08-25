export const contentFromConfig = {
  title: '商品',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80 ' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '先价格', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '80', slotName: 'stauts' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  // 显示序号列
  showIndexColumn: true,
  // 显示选择
  showSelectColumn: true
}
