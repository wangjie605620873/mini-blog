const {query} = require('../index');

/**
 * inster table data
 * @param  {string}           表名称
 * @param  {object}           插入数据
 * @return {object}           sql结果
 */
async function dbInster(table, model) {
  let keys = Object.keys(model);
  let values = Object.values(model);
  let Sql = `INSERT INTO ${table}(${keys.join(',')}) VALUES (${values.join(',')})`;
  let result = "";
  try {
    result = await query(Sql, model);
  }catch (err){
     result = err
  }
  return result
}
async function dbQuery(sql) {
  let result =  await query(sql);
  return result;
}
module.exports = {
  dbInster,
  dbQuery
};
