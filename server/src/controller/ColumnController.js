const ColumnService = require('../service/ColumnService');
const fs = require('fs');




class ColumnController{
  async addColumn(){
    let data = await ColumnService.addColumn();
    return data;
  }

  async addColumnUploadImg(ctx,next){
    let file = ctx.request.files.file;
    let reader= fs.createReadStream(file.path);
    let filePath =  "static/upload";
    let fileResource=filePath+`/${file.name}`;
    if(!fs.existsSync(filePath)){
      fs.mkdir(filePath,(err)=>{
        if (err){
           console.log(err)
        }else{
          let upstream= fs.createWriteStream(fileResource);
          reader.pipe(upstream);
        }
      })
    }else{
      let upstream=fs.createWriteStream(fileResource)
      reader.pipe(upstream);
    }



    ctx.body = {
      code : 200,
      msg : "ok",
      url : STATICURL + 'upload/' + file.name
    }
    await next()
  }
}
module.exports = new ColumnController();