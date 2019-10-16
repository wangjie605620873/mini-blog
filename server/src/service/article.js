/*文章类
* */
const ArticleModel = require('../model/article');
const {Success} = require('../lib/utils');
const {ParamsHttpException} = require('../lib/HttpException');



class Article {
  static async addArticle(){

  }
  //草稿
  static async articleDraft(){

  }

  static async delArticle(){

  }

  static async getArticle(ctx,next){
    let {currentPage, pageSize} = ctx.request.body;
    ctx.checkBody('currentPage', "当前页不能为空").notEmpty();
    ctx.checkBody('pageSize', '每页数不能为空').notEmpty();
    if (ctx.errors) throw new ParamsHttpException(ctx.errors);
    let data = await ArticleModel.getArticle({currentPage, pageSize});
    Success({count: data.count, data: data.data});
    await next();
  }

  static async getArticleDetails(ctx,next){
    ctx.checkBody('id', "文章id异常").notEmpty();
    if (ctx.errors) throw new ParamsHttpException(ctx.errors);
    let data = await ArticleModel.getArticleDetails({id:ctx.request.body.id})
    let detalis = data[0];
    Success({...detalis.dataValues});
    await next()

  }

}
module.exports = Article;
