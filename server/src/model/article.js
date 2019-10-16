//文章
const {Sequelize, Model} = require('sequelize');
const sequelize = require('../db/index');

class ArticleModel extends Model {
  static async addArticle(options) {
    return await this.create(options)
  }

  static async getArticle(options) {
    let {currentPage, pageSize} = options;
    let count = await this.count();
    let data = await this.findAll({
      raw: true,
      offset: (currentPage - 1 ) * pageSize,
      limit: pageSize / 1
    });
    return {
      count,
      data
    }
  }

  static async getArticleDetails(options) {
    await this.update({articleReadCount: sequelize.literal('`article_read_count` + 1')}, {
      where: {
        id: options.id
      }
    });
    return await this.findAll({
      where: {
        id: options.id
      },
    })
  }

  static async getIndexBanner() {
    return await this.findAll({
      order: [
        ['article_read_count', 'DESC'],
      ],
      attributes : ["id","articleTitle","columnActive","articleCover","articleReadCount","dateActive"]
    });
  }
}

ArticleModel.init({
  articleTitle: Sequelize.STRING,
  columnActive: Sequelize.STRING,
  dateActive: Sequelize.STRING,
  articleBodyHtml: Sequelize.TEXT,
  articleBodyMark: Sequelize.TEXT,
  articleCover: Sequelize.STRING,
  userId: Sequelize.STRING,
  articleReadCount: {
    defaultValue: 0,
    type: Sequelize.INTEGER
  }
}, {sequelize, tableName: 'article'});

module.exports = ArticleModel;
