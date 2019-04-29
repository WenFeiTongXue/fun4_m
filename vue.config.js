// vue.config.js
module.exports = {
  devServer: {
      port: 8080,
      proxy: {
          '/apis': {
              target: 'https://c.y.qq.com',  // target host
              ws: true,  // proxy websockets 
              changeOrigin: true,  // needed for virtual hosted sites
              pathRewrite: {
                  '^/apis': ''  // rewrite path
              }
          },
      }
  }
};