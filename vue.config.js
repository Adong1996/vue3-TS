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
  }
}
