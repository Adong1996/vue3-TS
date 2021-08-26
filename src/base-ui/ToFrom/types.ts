type IFromType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFromItem {
  field: string
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: any
  //  select
  options?: any[]
  // 特殊的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface IFrom {
  fromItems: IFromItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
}
