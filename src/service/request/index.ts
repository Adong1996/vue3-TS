import axios from 'axios'

import type { AxiosInstance } from 'axios'

// import qs from 'qs'
import { AxiosRequestInterceptors, AllRequestInterceptors } from './type'

class AllRequest {
  instance: AxiosInstance
  interceptors?: AxiosRequestInterceptors
  constructor(config: AllRequestInterceptors) {
    // 创建 axios 实例
    this.instance = axios.create(config)

    //从config中取出的拦截器是对应的实例的拦截器
    this.interceptors = config.interceptors
    // 每个实例对应的拦截器
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
  // 实例的公共的请求方式
  requset<T = any>(config: AllRequestInterceptors<T>): Promise<T> {
    return new Promise((resolve) => {
      // 单个请求的拦截 看请求方式中里是否有对应的实例的拦截器
      if (config.interceptors?.reqInterceptors) {
        config = config.interceptors.reqInterceptors(config)
      }
      this.instance.request<any, T>(config).then((res) => {
        if (config.interceptors?.resInterceptors) {
          config = config.interceptors.resInterceptors(res)
        }
        resolve(res)
      })
    })
  }
  get<T = any>(config: AllRequestInterceptors<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: AllRequestInterceptors<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: AllRequestInterceptors<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'DELETE' })
  }
  putch<T = any>(config: AllRequestInterceptors<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'PATCH' })
  }
}

export default AllRequest
