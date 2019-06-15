const ColumnModel = require('../model/ColumnModel');
const {createUUID} = require('../utils/index');
const fs = require("fs");

class ColumnService {
  static async addColumn(ctx) {
    let body = ctx.request.body;
    let response = {};
    try {
      await ColumnModel.addColumn(body);
      response.code = 200;
      response.message = "ok"
    } catch (e) {
      response.code = 204;
      response.message = e
    }
    return response;
  }

  static async addColumnUploadImg(ctx) {
    let rep = {};
    //获取文件
    let file = ctx.request.files.file;

    //文件名称
    let uuid = `${createUUID()}_${file.name}`;

    //读取文件
    let reader = fs.createReadStream(file.path);

    //文件存放地址
    let filePath = "static/upload";

    //写入路径+文件名称
    let fileResource = filePath + `/${uuid}`;

    if (!fs.existsSync(filePath)) {
      fs.mkdir(filePath, (err) => {
        if (err) {
          rep.code = 201;
          rep.msg = err;
        } else {
          let upstream = fs.createWriteStream(fileResource);
          reader.pipe(upstream);
          rep.code = 200;
          rep.msg = 'ok';
          rep.url = STATICURL + 'upload/' + `${uuid}`
        }
      })
    } else {
      let upstream = fs.createWriteStream(fileResource)
      reader.pipe(upstream);
      rep.code = 200;
      rep.msg = 'ok';
      rep.url = STATICURL + 'upload/' + `${uuid}`
    }
    return rep
  }

  static async getColumn(ctx) {
    let body = ctx.request.body;
    let response = {};
    try {
      let data = await ColumnModel.getColumn(body);
      response.code = 200;
      response.message = "ok";
      response.data = data;
    } catch (e) {
      response.code = 204;
      response.message = e
    }
    return response;
  }
}
module.exports = ColumnService;
