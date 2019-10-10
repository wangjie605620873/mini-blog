//文章
const {Sequelize, Model} = require('sequelize');
const sequelize = require('../db/index');
class ArticleModel extends Model {
  static async addArticle(options){
    return await this.create(options)
  }
}

ArticleModel.init({
  articleTitle: Sequelize.STRING,
  columnActive: Sequelize.STRING,
  dateActive: Sequelize.STRING,
  articleBodyHtml: Sequelize.STRING,
  articleBodyMark: Sequelize.STRING,
  articleCover: Sequelize.STRING,
  userId: Sequelize.STRING
}, {sequelize, tableName: 'article'});

module.exports = ArticleModel;
