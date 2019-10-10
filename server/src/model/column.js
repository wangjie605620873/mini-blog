const {Sequelize, Model} = require('sequelize');
const sequelize = require('../db/index');

class Column extends Model {

  static async addColumn(options){
    let {name , desc , imgUrl} =options;
    return await this.create({
      column_name : name,
      column_cover : imgUrl,
      column_describe  : desc
    });
  }

  static async getColumn(){
    let data =  await this.findAll();
    if (data.length <= 0){
      await this.addColumn({name : "默认分类",desc : "默认分类",imgUrl : ""})
      data =  await this.findAll()
    }
    return data
  }

  static async delColumn(ctx){
    let id = ctx.request.body.id;
    return await  this.destroy({
      where : {
        id : id
      }
    })
  }
}

Column.init({
  column_name: Sequelize.STRING,
  column_cover: Sequelize.STRING,
  column_describe : Sequelize.STRING,
}, {sequelize, tableName: 'column'});

module.exports = Column;
