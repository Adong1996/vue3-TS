import { IFrom } from '@/base-ui/ToFrom/index'

export const modalConfig: IFrom = {
  title: '用户',
  fromItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品类名',
      placeholder: '请输入商品类名'
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    margin: '0px 0px 25px 0px'
  }
}
