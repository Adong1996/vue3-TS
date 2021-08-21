type IFromType = 'input' | 'possword' | 'select' | 'datepicker'
export interface IFromItem {
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: any
  //  select
  options?: any[]
  // 特殊的属性
  otherOptions?: any
}

export interface IFrom {
  fromItems: IFromItem[]
  labelWidth: string
  colLayout: any
  itemLayout: any
}
