const {dbQuery} = require('../db/utils/utils');
class ColumnModel {
  /*
  *
  * */
  async  addColumn(options) {
    // let a = {columnName:}
    let {columnName, columnDescribe,columnCover} = options;

    let Sql = `INSTER INTO column (column_name,column_describe,column_dover,column_create) VALUES (${columnName},${columnDescribe},${columnCover},${Date.now()})`;
    let dbData = await dbQuery(Sql);
    console.log(dbData);
    return {code : 200};
  }
}

module.exports = new ColumnModel();







