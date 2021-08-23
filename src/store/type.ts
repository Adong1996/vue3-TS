import { ILoginState } from './login/login'

import { IStstemState } from './/main/system/type'
export interface IRootState {
  count: string
}

export interface IRootWithModule {
  login: ILoginState
  system: IStstemState
}

export type IStoreType = IRootState & IRootWithModule
