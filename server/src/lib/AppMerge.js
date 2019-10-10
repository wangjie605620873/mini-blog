const requireDirectory = require('require-directory');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const {Config} = require('../../config/config.js');
const catchError = require('../middleware/CatchError');
const NotFound = require('../middleware/NotFound');
const verifyTokenMiddleware = require('../middleware/verifyToken');
class AppMerge {
  constructor(app) {
    AppMerge.app = app;
    AppMerge.LoadConfig();
    AppMerge.staticFile();
    AppMerge.HttpcatchError();
    AppMerge.HttpNotFound();
    AppMerge.VerifyToken();
    AppMerge.initLoadRouter();

  }
  //挂载配置信息
  static LoadConfig() {
    global.Config = Config;
  }
  //token 验证、过滤
  static VerifyToken(){
    AppMerge.app.use(verifyTokenMiddleware)
  }

  //挂载路由
  static initLoadRouter() {
    const apiDirectory = `${process.cwd()}/src/router/`;
    requireDirectory(module, apiDirectory, {
      visit: (r) => {
        if (r instanceof Router) {
          AppMerge.app.use(r.routes()).use(r.allowedMethods())
        }
      }
    });
  }
  //挂载 静态资源
  static staticFile(){
    AppMerge.app.use(serve(path.join(process.cwd(),`./${Config.staticPath}`)))
  }

  //http 错误处理
  static HttpcatchError(){
    AppMerge.app.use(catchError)
  }

  //资源，借口未找到
  static HttpNotFound(){
    AppMerge.app.use(NotFound)
  }

}
module.exports=AppMerge