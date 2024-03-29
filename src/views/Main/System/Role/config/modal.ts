import { IFrom } from '@/base-ui/ToFrom/index'

export const modalConfig: IFrom = {
  title: '角色',
  fromItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    margin: '0px 0px 25px 0px'
  }
}
