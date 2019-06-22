const jwtKoa = require('koa-jwt');
const {SECRET, FILTER_ROUTER} = require('./const');
// token验证
const Token_Test = function(ctx,next){
  console.log(FILTER_ROUTER)
  return jwtKoa({secret: SECRET}
  ).unless({path: FILTER_ROUTER})};
//token 验证失败处理
const Token_Test_Error = function (ctx, next) {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 200;
      ctx.body = {
        code : 205,
        msg: err.originalError ? err.originalError.message : err.message,
        message : "token 验证失败"
      }
    } else {
      throw err;
    }
  });
};
module.exports = {
  Token_Test,
  Token_Test_Error
}