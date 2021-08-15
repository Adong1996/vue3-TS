import qs from 'qs'
// service 统一出口
import AllRequest from './request/index'

// 常量
import { BASE_URL, TIME_OUT } from './request/config'

import { localStorageGet } from '@/utils/localStorage'
const backRequest = new AllRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    reqInterceptors: (config) => {
      const data = config.data
      // axios默认请求体格式是json对象 --> url-encodie
      if (data instanceof Object) {
        config.data = qs.stringify(data)
      }
      // 携带token的方式：1.cookie 2. 请求参数 3.请求头[authorization]
      const token = localStorageGet('key_token')
      if (config.headers.needToken) {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        } else {
          throw Error('请先登录')
        }
      }
      return config
    },
    reqInterceptorsCatch: (err) => {
      return err
    },
    resInterceptors: (res) => {
      const data = res.data
      return data
    },
    resInterceptorsCatch: () => {
      return new Promise<void>(() => ({}))
    }
  }
})
export { backRequest }
