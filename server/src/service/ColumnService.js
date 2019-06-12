const ColumnModel = require('../model/ColumnModel');
const formidable = require("koa-formidable");
const fs = require('fs')
class ColumnService{
  async addColumn(){}
  async addColumnUploadImg(ctx){
    let rep = {};
    let file = ctx.request.files.file;
    let reader= fs.createReadStream(file.path);
    let filePath =  "static/upload";
    let fileResource=filePath+`/${file.name}`;
    if(!fs.existsSync(filePath)){
      fs.mkdir(filePath,(err)=>{
        if (err){
          rep.code = 201;
          rep.msg = err;
        }else{
          let upstream= fs.createWriteStream(fileResource);
          reader.pipe(upstream);
          rep.code = 200;
          rep.msg = 'ok';
          rep.url = STATICURL + 'upload/' + `${file.name}`
        }
      })
    }else{
      let upstream=fs.createWriteStream(fileResource)
      reader.pipe(upstream);
      rep.code = 200;
      rep.msg = 'ok';
      rep.url = STATICURL + 'upload/' + `${file.name}`
    }
    return rep
  }
}


module.exports = new ColumnService();
