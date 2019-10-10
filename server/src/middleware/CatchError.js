const {HttpException} = require('../lib/HttpException');
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    if (error instanceof HttpException) {
      ctx.body = {
        message: error.message,
        code: error.code,
        request: `method : ${ctx.method} and  url : ${ctx.path}`,
      };
      if (error.data) {
        ctx.body.data = error.data
      }
      ctx.status = error.status
    } else {
      ctx.body = {
        message: "服务端出现异常",
        code: 500,
        request: `method : ${ctx.method} and  url : ${ctx.path}`,
      };
      ctx.status = 500;
    }
  }
};

module.exports = catchError;