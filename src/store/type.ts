import { ILoginState } from './login/login'

import { IStstemState } from './/main/system/type'
export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: IStstemState
}

export type IStoreType = IRootState & IRootWithModule
