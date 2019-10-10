const {HttpException} = require('../lib/HttpException');
const NotFound = async (ctx,next) =>{
  await next();
  if (!ctx.body){
    const error = new HttpException("资源未找到",404,404);
    throw error
  }
};
module.exports = NotFound;