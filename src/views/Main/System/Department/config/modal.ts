import { IFrom } from '@/base-ui/ToFrom/index'

export const modalConfig: IFrom = {
  title: '部门',
  fromItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导名称',
      placeholder: '请输入领导名称'
    }
  ],
  colLayout: { span: 24 },
  itemLayout: {
    margin: '0px 0px 25px 0px'
  }
}
