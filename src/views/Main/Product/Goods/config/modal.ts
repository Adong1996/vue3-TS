import { IFrom } from '@/base-ui/ToFrom/index'

export const modalConfig: IFrom = {
  title: '用户',
  fromItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价格',
      placeholder: '请输入原价格'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '先价格',
      placeholder: '请输入先价格'
    },
    {
      field: 'status',
      type: 'input',
      label: '状态',
      placeholder: '请输入状态'
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    margin: '0px 0px 25px 0px'
  }
}
