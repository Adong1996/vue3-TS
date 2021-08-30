import { ILoginState } from './login/login'

import { IStstemState } from './main/system/type'

import { IDashboardState } from './main/analysis/type'
export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entirMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: IStstemState
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
