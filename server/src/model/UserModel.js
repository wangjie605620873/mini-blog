const {dbQuery} = require('../db/utils/utils');
class UserModel {
  static async register(options) {
    let {phone, password} = options;
    let Sql = `INSERT INTO admin_user (phone,password,create_time) VALUES ('${phone}','${password}',${Date.now() + ''})`;
    let dbData = await dbQuery(Sql);
    return dbData;
  }
  static async login(options) {
    let {phone} = options;
    let Sql = `SELECT * FROM admin_user WHERE phone = ${phone}`;
    let dbData = await dbQuery(Sql);
    console.log(dbData,'dbData')
    return dbData;
  }
}

module.exports = UserModel;







