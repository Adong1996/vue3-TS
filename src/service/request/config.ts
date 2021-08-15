// 根据不同环境有不同的值--process.env.NOOE_ENV 根据 webpack 插件 definePlugin

let BASE_URL = ''
let TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
  TIME_OUT = 10000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/api'
  TIME_OUT = 10000
} else {
  // BASE_URL = 'https://github.com/axios/axios'
  TIME_OUT = 10000
}
export { BASE_URL, TIME_OUT }
