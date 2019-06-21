// const jwt = require('jwt-simple');
// let {signIn} = require("../model/UserModel");
// const {
//   SECRET,
//   TOKEN_TIME,
// } = require('../util/token/index');
const UserService = require('../service/UserService');
class UserController {
  static async login(ctx, next) {
    ctx.body = await UserService.login(ctx);
    await next
  }
  static async register(ctx,next){
    ctx.body = await UserService.register(ctx);
    await next
  }

  // //login
  // async login(ctx, next) {
  //   let {username, password} = ctx.request.body;
  //   let res = {
  //     message: "",
  //     code: "",
  //     data: "",
  //     token: ""
  //   };
  //   if (!username || !/^1[34578]\d{9}$/.test(username)) {
  //     res.code = '202';
  //     res.message = "手机号格式不正确"
  //   } else if (!password) {
  //     res.code = '202';
  //     res.message = "密码不能为空"
  //   } else {
  //
  //     let options = {phone: username, password: password};
  //     // 查询
  //     let sqlInfo = await signIn(options);
  //     if (typeof sqlInfo != "undefined"){
  //
  //     }
  //
  //
  //     if (sqlInfo.code == "ER_DUP_ENTRY") {
  //       res.code = '204';
  //       res.message = "账号已经存在";
  //     } else {
  //       res.code = '200';
  //       res.message = "登录成功";
  //       let payload = {
  //         exp: Date.now() + TOKEN_TIME,
  //         name: username
  //       };
  //       let token = jwt.encode(payload, SECRET);
  //       res.token = token;
  //     }
  //   }
  //   ctx.body = res;
  //   await next
  // }
  //
  // async test(ctx, next) {
  //   ctx.body = {
  //     code: "200"
  //   }
  //   await next
  // }
}

module.exports = UserController;