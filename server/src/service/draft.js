/*草稿
* */
const {DraftModel} = require('../model/draft');
const {Success} = require('../lib/utils');
const {ParamsHttpException, NotDataHttpException} = require('../lib/HttpException');
const ArticleModel = require('../model/article')

class Draft {
  //保存草稿
  static async articleDraft(ctx, next) {
    let {articleTitle, columnActive, dateActive, articleBodyHtml, articleBodyMark, articleId, articleCover, phone} = ctx.request.body;
    let data = await DraftModel.addDraft({
      articleTitle,
      columnActive,
      dateActive,
      articleBodyHtml,
      articleBodyMark,
      articleId,
      articleCover,
      userId: phone
    });
    Success({id: data.id});
    await next()
  }

  //设置封面
  static async setCover(ctx, next) {
    let {articleId, articleCover, phone} = ctx.request.body;
    let data = await DraftModel.setCover({
      articleId,
      articleCover,
      userId: phone
    });
    Success({id: data.id});
    await next()
  }

//  获取草稿列表
  static async getDrafts(ctx, next) {
    let {currentPage, pageSize} = ctx.request.body;
    ctx.checkBody('currentPage', "当前页不能为空").notEmpty();
    ctx.checkBody('pageSize', '每页数不能为空').notEmpty();
    if (ctx.errors) throw new ParamsHttpException(ctx.errors);
    let data = await DraftModel.getDraft({currentPage, pageSize});
    Success({count: data.count, data: data.data});
    await next();
  }

  static async getDraftArticle(ctx, next) {
    ctx.checkBody('articleId', "id不能为空").notEmpty();
    if (ctx.errors) throw new ParamsHttpException(ctx.errors);
    let articleId = ctx.request.body.articleId;
    let article = await DraftModel.getDraftArticle({articleId});
    Success({data: article[0]});
    await next()
  }

  static async delDrafts(ctx, next) {
    ctx.checkBody('articleId', "id不能为空").notEmpty();
    if (ctx.errors) throw new ParamsHttpException(ctx.errors);
    await DraftModel.delDrafts({articleId: ctx.request.body.articleId});
    Success();
    await next();

  }

  static async publishDrafts(ctx, next) {
    ctx.checkBody('articleId', "id不能为空").notEmpty();
    if (ctx.errors) throw new ParamsHttpException(ctx.errors);
    let article = await DraftModel.getDraftArticle({articleId: ctx.request.body.articleId});
    let {articleCover, articleTitle, columnActive, dateActive, articleBodyHtml, articleBodyMark} = article[0];
    if (!articleCover) throw new ParamsHttpException("请设置文章封面");
    if (!articleTitle) throw new ParamsHttpException("请填写文章标题");
    if (!columnActive) throw new ParamsHttpException("请设置文章分类");
    await ArticleModel.addArticle({
      articleCover,
      articleTitle,
      columnActive,
      dateActive,
      articleBodyHtml,
      articleBodyMark
    });
    let data = await DraftModel.delDrafts({articleId: ctx.request.body.articleId});
    console.log(data)
    Success();
    await next()
  }
}

module.exports = Draft;
