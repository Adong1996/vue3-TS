import { AxiosRequestConfig, AxiosResponse } from 'axios'

//类型接口

export interface AxiosRequestInterceptors {
  //请求拦截
  reqInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  reqInterceptorsCatch?: (err: any) => any
  // 响应拦截
  resInterceptors?: (res: AxiosResponse) => AxiosResponse
  resInterceptorsCatch?: (err: any) => any
}
export interface HYRequestInterceptors extends AxiosRequestConfig {
  interceptors?: AxiosRequestInterceptors
}
