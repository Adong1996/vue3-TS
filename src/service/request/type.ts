import { AxiosRequestConfig, AxiosResponse } from 'axios'

//类型接口

export interface AxiosRequestInterceptors<T = AxiosResponse> {
  //请求拦截
  reqInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  reqInterceptorsCatch?: (err: any) => any
  // 响应拦截
  resInterceptors?: (res: T) => T
  resInterceptorsCatch?: (err: any) => any
}
export interface AllRequestInterceptors<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: AxiosRequestInterceptors<T>
}
