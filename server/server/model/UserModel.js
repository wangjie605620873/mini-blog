const {dbQuery} = require('../../db/utils/utils');
class UserModel {
  //登录
   async  signIn(options) {
    let {phone, password} = options;
    let Sql = `SELECT * FROM user WHERE phone = ${phone}`;
    let dbData = await
    dbQuery(Sql);
    return dbData[0];
  }
}

module.exports = new UserModel();







