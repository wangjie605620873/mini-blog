const article = require('../service/article');
const router = require('koa-router')();
router
  .post('/addArticle', article.addArticle)
  .post('/delArticle',article.delArticle)
  .post('/getArticle',article.getArticle)
  .post("/getArticleDetails",article.getArticleDetails)
module.exports = router;
