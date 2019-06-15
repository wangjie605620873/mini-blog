const ColumnService = require('../service/ColumnService');
class ColumnController{
  static async addColumn(ctx,next){
    ctx.body = await ColumnService.addColumn(ctx);
    await  next
  }
  static async addColumnUploadImg(ctx,next){
    ctx.body = await ColumnService.addColumnUploadImg(ctx);
    await next

  }
  static async getColumn(ctx,next){
    ctx.body = await ColumnService.getColumn(ctx);
    await  next
  }
}
module.exports = ColumnController;