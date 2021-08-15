import { backRequest } from '../index'

enum LoginApi {
  AccountLogin = '/login',
  usersInfo = '/users/',
  usersMenuIds = '/role/'
}
export interface IAccount {
  name: string
  password: string
}
export interface IDataType {
  code: number
  data: any
}
export function reqLogin(account: IAccount) {
  return backRequest.post<IDataType>({
    url: LoginApi.AccountLogin,
    data: account
  })
}
export function reqUserInfo(id: number) {
  return backRequest.get<IDataType>({
    url: LoginApi.usersInfo + id,
    headers: {
      needToken: true
    }
  })
}
export function reqUseMenuIds(id: number) {
  return backRequest.get<IDataType>({
    url: LoginApi.usersMenuIds + id + '/menuIds',
    headers: {
      needToken: true
    }
  })
}
