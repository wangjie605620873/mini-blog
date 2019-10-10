
const {Success} = require('../lib/utils');
const {ParamsHttpException,NotDataHttpException} = require('../lib/HttpException');
const ColumnModel = require('../model/column');
const UpLoader = require('../lib/upLoader');





class Column {
  static async addColumn(ctx, next) {
    ctx.checkBody("name").notEmpty("分类名称不能为空");
    ctx.checkBody('desc').notEmpty("分类描述不能为空");
    ctx.checkBody('imgUrl').notEmpty("请上传分类封面");
    if (ctx.errors) throw new ParamsHttpException(ctx.errors);
    await ColumnModel.addColumn(ctx);
    Success();
    await next()
  }
  static async getColumn(ctx,next){
    let {name , desc , imgUrl} = ctx.request.body;
    let data = await ColumnModel.getColumn({name , desc , imgUrl});
    console.log(data)
    if (data.length <=0) throw new NotDataHttpException();
    Success({data});
    await next()
  }


  static async delColumn(ctx, next) {
    ctx.checkBody("id").notEmpty("分类ID不能为空");
    if (ctx.errors) throw  new ParamsHttpException(ctx.errors);
    let data =  await ColumnModel.delColumn(ctx);
    Success();
    await next()
  }



  static async addColumnUploadImg(ctx,next) {
    let filePath = await new UpLoader().upImage(ctx);
    Success({imageUrl : filePath});
    await next()
  }
}

module.exports = Column;
