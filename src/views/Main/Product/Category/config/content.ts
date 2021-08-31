export const contentFromConfig = {
  title: '类名',
  propList: [
    { prop: 'name', label: '商品类名', minWidth: '100' },
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
