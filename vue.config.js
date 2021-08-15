const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts'],
      alias: {
        '@': resolve('src'), //设置文件查找路径，可简写文件查找路径
        components: resolve('src/components')
      }
    }
  },
  devServer: {
    // open: true,
    proxy: {
      // 处理以/api开头路径的请求
      '/api': {
        target: 'http://152.136.185.210:5000', // 转发的目标地址
        pathRewrite: {
          '^/api': '' // 转发请求时去除路径前面的/api
        },
        changeOrigin: true // 支持跨域, 如果协议/主机也不相同, 必须加上
      }
    }
  }
}
