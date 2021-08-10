// service 统一出口
import HYRequest from './request/index'

// 常量
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
  // interceptors: {
  //   reqInterceptors: (config) => {
  //     return config
  //   },
  //   reqInterceptorsCatch: (err) => {
  //     return err
  //   },
  //   resInterceptors: (res) => {
  //     return res
  //   },
  //   resInterceptorsCatch: (err) => {
  //     return err
  //   }
  // }
})
export default hyRequest
