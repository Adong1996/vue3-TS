import { backRequest } from '../index'
import { IDataType } from '../type'
enum LoginApi {
  AccountLogin = '/login',
  usersInfo = '/users/',
  usersMenuIds = '/role/'
}
export interface IAccount {
  name: string
  password: string
}

export function reqLogin(account: IAccount) {
  return backRequest.post<IDataType>({
    url: LoginApi.AccountLogin,
    data: account
  })
}
export function reqUserInfo(id: number) {
  return backRequest.get<IDataType>({
    url: LoginApi.usersInfo + id
    // headers: {
    //   needToken: true
    // }
  })
}
export function reqUseMenuIds(id: number) {
  return backRequest.get<IDataType>({
    url: LoginApi.usersMenuIds + id + '/menu'
    // headers: {
    //   needToken: true
    // }
  })
}
