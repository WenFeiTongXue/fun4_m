// vue.config.js
module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: './',
  devServer: {
      port: 80,
      proxy: {
          '/apis': {
              target: 'https://c.y.qq.com',  // target host
              ws: true,  // proxy websockets 
              changeOrigin: true,  // needed for virtual hosted sites
              bypass: function (req, res, proxyOptions) {
                req.headers.referer = 'https://c.y.qq.com/'
                req.headers.host = 'c.y.qq.com'
              },
              pathRewrite: {
                  '^/apis': ''  // rewrite path
              }
          },
      }
  }
};