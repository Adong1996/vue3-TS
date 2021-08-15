import { localStorageSet } from '@/utils/localStorage'

//登录验证
export const loginAll = function (
  type: string,
  userFrom: any | undefined,
  info?: any | undefined,
  isCheck?: boolean
): any {
  let isScrress = false
  if (type === 'user') {
    userFrom.validate((valid: boolean) => {
      if (valid) {
        // 账号登录请求
        console.log('登录验证成功')
        if (isCheck) {
          localStorageSet(type, info)
          return
        }
        isScrress = true
      } else {
        console.log('验证错误')
      }
    })
  } else {
    userFrom.validate((valid: boolean) => {
      if (valid) {
        // 手机登录请求
        console.log('登录验证成功')
        if (isCheck) {
          localStorageSet(type, info)
        }
      } else {
        console.log('验证错误')
      }
    })
  }
  return isScrress
}
