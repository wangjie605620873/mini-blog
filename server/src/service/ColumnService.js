const ColumnModel = require('../model/ColumnModel');
const formidable = require("koa-formidable");
class ColumnService{
  async addColumn(){}
  async addColumnUploadImg(){
    return {
      code : 200
    };
  }
}


module.exports = new ColumnService();
