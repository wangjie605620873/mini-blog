// const UserModel = require('../model/UserModel');
let {request} = require('../lib/utils');
const {Success} = require('../lib/utils');
const {ParamsHttpException} = require('../lib/HttpException');

const ArticleModel = require('../model/article');



class Mini {
  static async getIndexBanner(ctx,next){
    let data = await ArticleModel.getIndexBanner()
    Success({data});
    await next();
  }


  static async getArticleDetails(ctx,next){
    ctx.checkBody("id","缺少参数文章ID");
    if (ctx.errors)  throw  new ParamsHttpException(ctx.errors);
    let data = await ArticleModel.getArticleDetails({id:ctx.request.body.id});
    let {articleTitle,columnActive, dateActive, articleBodyMark,articleCover,articleReadCount} = data[0];
    Success({articleTitle,columnActive, dateActive, articleBodyMark,articleCover,articleReadCount});
    await next()
  }
}
module.exports = Mini;
