const UserModel = require('../model/UserModel');
let {salt} = require('../utils/index');
const {SECRET, TOKEN_TIME} = require('../middleware/token/const');
const jwt = require('jwt-simple');
class UserService {
  static async login(ctx) {
    let {password, phone} = ctx.request.body;
    let response = {code: 200, message: 'ok'};
    if (!/^[1]([3-9])[0-9]{9}$/.test(phone)) {
      response.code = 201;
      response.message = "手机号码格式不正确"
    }
    try {
      let data = await UserModel.login({phone});
      let saltPassword = salt(password);
      if (data.length === 0) {
        response.code = 201;
        response.message = "手机号未注册！";
        return response;
      }
      if (saltPassword !== data[0].password) {
        response.code = 201;
        response.message = "密码输入有误";
        return response;
      }
      let payload = {
        exp: Date.now() + TOKEN_TIME,
        name: phone
      };
      response.token = jwt.encode(payload, SECRET);
    } catch (e) {
      response.code = 204;
      response.message = e;
    }
    return response
  }

  static async register(ctx) {
    let response = {
      code: 200,
      message: 'ok'
    };
    let {phone, password, passwordAgain} = ctx.request.body;
    if (!/^[1]([3-9])[0-9]{9}$/.test(phone)) {
      response.code = 201;
      response.message = "手机号码格式件有误！"
    }
    if (password === "" || password.length < 8 || password.length > 19) {
      response.code = 201;
      response.message = "密码格式有误，长度必须大于8位小于16位"
    }
    if (password !== passwordAgain) {
      response.code = 201;
      response.message = "两次密码输入不一致"
    }
    let saltPassword = salt(password);
    let options = {
      phone: phone,
      password: saltPassword,
    };

    try {
      await UserModel.register(options)
    } catch (e) {
      if (e.sqlState == 23000) {
        response.code = 201;
        response.message = "手机号码已经注册"
      }
    }
    return response;
  }

  static async profile() {
    const data = await UserModel.findUserProfile();
    return {data};
  }
}

module.exports = UserService;
