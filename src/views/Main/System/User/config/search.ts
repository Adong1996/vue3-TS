import { IFrom } from '@/base-ui/ToFrom/index'

export const searchFromConfig: IFrom = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  colLayout: {},
  fromItems: [
    {
      type: 'input',
      label: 'id',
      placeholder: '请输入用id'
    },
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'possword',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '喜欢运动',
      placeholder: '请选择喜欢运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
