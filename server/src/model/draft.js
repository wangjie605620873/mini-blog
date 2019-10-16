//草稿
const {Sequelize, Model} = require('sequelize');
const sequelize = require('../db/index');
class DraftModel extends Model {
  static async addDraft(options) {
    let {articleTitle, columnActive, dateActive, articleBodyHtml, articleBodyMark, articleId, articleCover, userId} = options;
    let data = "";
    if (articleId) {
      data = await this.update(
        {articleTitle, columnActive, dateActive, articleBodyHtml, articleBodyMark, articleCover, userId},
        {
          where: {
            id: articleId
          }
        })
    } else {
      data = await this.create({
        articleTitle,
        columnActive,
        dateActive,
        articleBodyHtml,
        articleBodyMark,
        articleCover,
        userId
      })
    }
    return data
  }

  static async setCover(options) {
    let {articleId, articleCover, phone} = options;
    let data = await this.update(
      {articleId, articleCover, phone},
      {
        where: {
          id: articleId
        }
      });
    return data
  }

  static async getDraft(options) {
    let {currentPage,pageSize }= options;
    let count = await this.count();
    let data = await this.findAll({
      raw:true,
      offset:(currentPage-1 ) * pageSize,
      limit: pageSize/1
    });
    return {
      count,
      data
    }
  }

  static async getDraftArticle(options){
    let {articleId} = options;
    let data =  await this.findAll({
      where: {
        id: articleId/1
      }
    })
    return data
  }

  static async delDrafts(options){
    let {articleId} = options;
    return await this.destroy({
      where : {
        id:articleId
      }
    })
  }



}

DraftModel.init({
  articleTitle: Sequelize.STRING,
  columnActive: Sequelize.STRING,
  dateActive: Sequelize.STRING,
  articleBodyHtml: Sequelize.TEXT,
  articleBodyMark: Sequelize.TEXT,
  articleCover: Sequelize.STRING,
  userId: Sequelize.STRING
}, {sequelize, tableName: 'draft'});
module.exports = {
  DraftModel,
};
