// const UserModel = require('../model/UserModel');
let {request} = require('../lib/utils');
const {Success} = require('../lib/utils');
const {ParamsHttpException} = require('../lib/HttpException');
const userModel = require('../model/user');
const {salt,createToken,verifyToken} = require('../lib/utils');


// const {SECRET, TOKEN_TIME} = require('../middleware/token/const');
// const jwt = require('jwt-simple');

// const {HttpException} = require('../lib/HttpException');


class User {

  static async register(ctx, next) {
    ctx.checkBody('phone').match(/^[1]([3-9])[0-9]{9}$/, "手机号格式不正确").notEmpty();
    ctx.checkBody('password', '参数不能为空').notEmpty().len(3, 20);
    ctx.checkBody('passwordAgain', '参数不能为空').notEmpty();
    let errors = ctx.errors;
    if (ctx.errors) throw new ParamsHttpException(errors);
    if (ctx.request.body.password !== ctx.request.body.passwordAgain) throw new ParamsHttpException("2次输入密码不一致");
    let isExist = await  userModel.isExist(ctx);
    if (isExist) throw new ParamsHttpException('该账号已经注册', "201");
    await  userModel.insterUser(ctx);
    Success();
    await next();
  }

  static async login(ctx, next) {
    ctx.checkBody('phone').match(/^[1]([3-9])[0-9]{9}$/, "手机号格式不正确").notEmpty();
    ctx.checkBody('password', '参数不能为空').notEmpty().len(3, 20);
    let isExist = await  userModel.isExist(ctx);
    if (!isExist) throw new ParamsHttpException("该账号还未注册，请先注册");
    if (isExist.password !== salt(ctx.request.body.password) ) throw new ParamsHttpException("密码输入不正确");
    // 生成token
    let token = createToken(ctx.request.body.phone);
    Success({
      token : token,
      phone : ctx.request.body.phone
    });
    await next();
  }





  static async test(ctx, next) {
    ctx.body = {
      code: 200
    };
    await next();
  }

  static async getOpen(ctx, next) {
    console.log(ctx.checkBody)
    let response = {code: 200, message: 'ok'};
    const AppID = "wxe2fe7ee9f61532d1";
    const APPSECRET = "82bbb3dd4182abf94819a783f2e73202";
    const {jscode} = ctx.request.body;
    let userInfo = await request({
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${AppID}&secret=${APPSECRET}&js_code=${jscode}&grant_type=authorization_code`,
      method: "GET"
    });
    response.data = userInfo.body;
    var a = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(response)
      }, 3000)
    });
    ctx.body = response;
    await next();

  }

  // static async getOpen(ctx) {
  //   let response = {code: 200, message: 'ok'};
  //   const AppID = "wxde850899af29ef02";
  //   // const AppID = "wxf0269c63d06da756";
  //   const APPSECRET = "554cb351f20ddea9293d08a6190b21b8";
  //   // const APPSECRET = "0ed4f6469050af46c562cda22f0ed033";
  //
  //
  //   // https://api.q.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=023Yibm92BnsOQ0iy4p92UPwm92Yibm8&grant_type=authorization_code
  //   //   let userInfo = await request({url: `https://api.weixin.qq.com/sns/jscode2session?appid=${AppID}&secret=${APPSECRET}&js_code=${jscode}&grant_type=authorization_code`, method: "GET"});
  //
  //
  //   const {jscode} = ctx.request.body;
  //   let userInfo = await request({
  //     url: `https://api.q.qq.com/sns/jscode2session?appid=${AppID}&secret=${APPSECRET}&js_code=${jscode}&grant_type=authorization_code`,
  //     method: "GET"
  //   });
  //   response.data = userInfo.body;
  //   return response
  // }
  static async getQQopen(ctx, next) {
    ctx.checkBody('jscode', 'jscode不能为空').notEmpty();
    // let errors = await ctx.validationErrors();

    let response = {code: 200, message: 'ok'};
    if (ctx.errors) {

    }
    const jscode = ctx.request.body.jscode;
    const AppID = "1109589755";
    const APPSECRET = "4ZkbAj0aUlWe35mp";

    // 我的qq小程序
    // const AppID = "1109721562";
    // const APPSECRET = "6BPUxksFvrJGmsYo";
    let userInfo = await request({
      url: `https://api.q.qq.com/sns/jscode2session?appid=${AppID}&secret=${APPSECRET}&js_code=${jscode}&grant_type=authorization_code`,
      method: "GET"
    });
    response.data = userInfo.body;
    var a = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(response)
      }, 3000)
    });


    ctx.body = await a;
    await next();
  }
}

module.exports = User;
