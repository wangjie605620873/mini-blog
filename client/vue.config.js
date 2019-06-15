
module.exports = {
  outputDir : process.env.outputDir,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  //生产环境是否生成 sourceMap 文件，一般情况不建议打开
  productionSourceMap: false,
  devServer: {
    // host: 'localhost',
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    hotOnly: true, // 热更新
    proxy: { //配置自动启动浏览器
      '/api': {
        target: 'http://17.0.0.1:5555/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }

    }
  },
};