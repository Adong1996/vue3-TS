import axios from 'axios'

import type { AxiosInstance } from 'axios'

import { AxiosRequestInterceptors, HYRequestInterceptors } from './type'

class HYRequest {
  instance: AxiosInstance
  interceptors?: AxiosRequestInterceptors
  constructor(config: HYRequestInterceptors) {
    this.instance = axios.create(config)
    // 每个实例对应的拦截器
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.reqInterceptors,
      this.interceptors?.reqInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.resInterceptors,
      this.interceptors?.resInterceptorsCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }
  request(config: HYRequestInterceptors): void {
    // 单个请求的拦截
    if (config.interceptors?.reqInterceptors) {
      config = config.interceptors.reqInterceptors(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.resInterceptors) {
        config = config.interceptors.resInterceptors(res)
      }
      console.log(res)
    })
  }
}

export default HYRequest
