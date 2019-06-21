const {dbQuery} = require('../db/utils/utils');
const moment = require('moment');
class ColumnModel {
  static async addColumn(options) {
    let {name, desc, imgUrl} = options;
    let Sql = `INSERT INTO column_list (column_name,column_describe,column_cover,column_create) VALUES ('${name}','${desc}','${imgUrl}',${Date.now() + ''})`;
    let dbData = await dbQuery(Sql);
    return dbData;
  }
  static async getColumn(){
    let sql = `SELECT * FROM  column_list`
    let data = await  dbQuery(sql);
    return data
  }
}
module.exports = ColumnModel