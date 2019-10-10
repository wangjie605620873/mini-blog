const {Sequelize, Model} = require('sequelize');
const sequelize = require('../db/index');
const {salt} = require('../lib/utils');

class User extends Model {
  static async isExist(ctx) {
    return await this.findOne({
      where: {
        phone: ctx.request.body.phone
      }
    })
  }

  static async insterUser(ctx) {
    let saltPassword = salt(ctx.request.body.password);
    return await this.create({
      phone: ctx.request.body.phone,
      password: saltPassword
    })
  }
}

User.init({
  phone: {
    type: Sequelize.STRING(11),
    unique: true
  },
  password: Sequelize.STRING
}, {sequelize, tableName: 'user'});

module.exports = User;
