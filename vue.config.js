const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false,
  //开启代理服务器 方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  //方式二
  devServer: {
    proxy: {
      '/api': {//请求前缀
        target: 'http://localhost:5000',
        pathRewrite: { '^/api': '' },//去除前缀
        ws: true,//用于支持websocket
        changeOrigin: false//用于控制请求头中的值
        
      },
      '/demo': {//请求前缀
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },//去除前缀
        ws: true,//用于支持websocket
        changeOrigin: false//用于控制请求头中的值
        
      },
      /*  '/foo': {
          target: '<other_url>'
       } */
    }
  }
})

