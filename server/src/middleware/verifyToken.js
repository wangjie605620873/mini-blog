const {verifyToken} = require('../lib/utils');
const {TokenException} = require('../lib/HttpException');

const FILTER_VERIFY_TOKEN = [
  "/login",
  "/register",
  "/miniApi",
  "/uploadImage"
];

const verifyTokenMiddleware = async (ctx,next) =>{
  let isToken = false;
  for (let key=0; key < FILTER_VERIFY_TOKEN.length; key ++){
    if (FILTER_VERIFY_TOKEN[key].indexOf(ctx.request.url) !== -1){
      isToken = true;
    }
  }

  // console.log(FILTER_VERIFY_TOKEN.map((x)=>{ return x.indexOf(ctx.request.url) !== -1}))
  if (!isToken){
    await next()
  }else{
    ctx.checkBody('token',"token不能为空").notEmpty().notBlank();
    ctx.checkBody('phone',"手机号不能为空").notEmpty().len(11);
    if (ctx.errors) throw new TokenException();
    let {token ,phone } = ctx.request.body;
    let testToken = verifyToken(token);
    if (phone !== testToken.phone) throw new TokenException();
    await next()
  }
};
module.exports = verifyTokenMiddleware;
