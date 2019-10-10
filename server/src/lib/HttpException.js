//HTTP 返回基类
class HttpException extends Error {
  constructor(msg = "服务器错误", code = 400, status = 400) {
    super();
    this.message = msg;
    this.code = code;
    this.status = status;
  }
}

//参数验证不符合
class ParamsHttpException extends HttpException {
  constructor(msg, code) {
    super();
    this.code = 201 || code;
    this.message = msg || "参数有误";
    this.status = 200;
  }
}

//暂无数据

class NotDataHttpException extends HttpException {
  constructor(msg, code) {
    super();
    this.code = 202 || code;
    this.message = msg || "暂无数据";
    this.status = 200;
  }
}


class TokenException extends HttpException{
  constructor(msg, code) {
    super();
    this.code = 210 || code;
    this.message = msg || "token不能为空";
    this.status = 200;
  }
}

//接口成功
class HttpSuccess extends HttpException {
  constructor(data) {
    super();
    this.code = 200;
    this.message = 'ok';
    this.status = 200;
    console.log(typeof data)
    if (typeof data) {
      this.data = data
    }
  }
}

module.exports = {
  HttpException,
  ParamsHttpException,
  HttpSuccess,
  NotDataHttpException,
  TokenException
};
