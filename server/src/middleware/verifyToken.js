const {verifyToken} = require('../lib/utils');
const {TokenException} = require('../lib/HttpException');

const FILTER_VERIFY_TOKEN = [
  "/login",
  "/register",
  "/miniApi",
  "/uploadImage",
  "/addColumnUploadImg",
  "/miniApi",
  "/upload"

];

const verifyTokenMiddleware = async (ctx,next) =>{
  let isToken = FILTER_VERIFY_TOKEN.find((item)=>{
    return ctx.request.url.indexOf(item) !== -1
  });

  if (isToken){
    await next()
  }else{
    console.log(ctx.request.body.token,'token')
    ctx.checkBody('token',"token不能为空").notEmpty().notBlank();
    ctx.checkBody('phone',"手机号不能为空").notEmpty().len(11);
    if (ctx.errors) throw new TokenException();


    let {token ,phone } = ctx.request.body;
    let testToken = verifyToken(token);
    console.log(testToken,'token')


    if (phone !== testToken.phone) throw new TokenException();
    await next()
  }
};
module.exports = verifyTokenMiddleware;
