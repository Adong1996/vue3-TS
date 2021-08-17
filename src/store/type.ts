import { ILoginState } from './login/login'

export interface IRootState {
  count: string
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
