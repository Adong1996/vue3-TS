import { AxiosRequestConfig, AxiosResponse } from 'axios'

//类型接口

export interface AxiosRequestInterceptors {
  reqInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  reqInterceptorsCatch?: (err: any) => any
  resInterceptors?: (res: AxiosResponse) => AxiosResponse
  resInterceptorsCatch?: (err: any) => any
}
export interface HYRequestInterceptors extends AxiosRequestConfig {
  interceptors?: AxiosRequestInterceptors
}
