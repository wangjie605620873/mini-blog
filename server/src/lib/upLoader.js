const {ParamsHttpException} = require('./HttpException');
const {createUUID} = require('./utils');
const fs = require('fs');
class UpLoader {
  constructor() {
    this.imageType = ['jpg', 'png', 'jpeg'];
    this.filePath = global.Config.filePath;
    this.staticPath = global.Config.staticPath;
  }

  async upImage(ctx) {
    let file = ctx.request.files.file;
    let fileType = file.name.split('.').pop();
    if (file.size > 500000) throw new ParamsHttpException("图片太大了，我存不下 ~.~ !");
    if (this.imageType.findIndex((val) => {return val === fileType}) === -1) throw new ParamsHttpException("图片格式不合法");
    let uuid = `${createUUID()}_${file.name}`;
    let reader = fs.createReadStream(file.path);
    //写入文件夹
    let writePath = `${global.Config.staticPath}${this.filePath}`;
    //写入的文件地址
    let writeFilePath = `./${global.Config.staticPath}${this.filePath}/${uuid}`;
    //返回前端文件地址
    let returnPath = `${this.filePath}/${uuid}`;
    if (!fs.existsSync(writePath)) {
      fs.mkdir(writePath, (err) => {
        if (err) {
          throw new ParamsHttpException("文件上传失败")
        } else {
          let upstream = fs.createWriteStream(writeFilePath);
          reader.pipe(upstream);
        }
      })
    } else {
      let upstream = fs.createWriteStream(writeFilePath);
      reader.pipe(upstream);
    }
    return global.Config.baseUrl + ":5555" + returnPath
  }
}

module.exports = UpLoader;
