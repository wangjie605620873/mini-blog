const ColumnService = require('../service/ColumnService');
const fs = require('fs');
class ColumnController{
  async addColumn(){
    let data = await ColumnService.addColumn();
    return data;
  }
  async addColumnUploadImg(ctx){
    let res = await ColumnService.addColumnUploadImg(ctx);
    ctx.body = res;
  }
}
module.exports = new ColumnController();