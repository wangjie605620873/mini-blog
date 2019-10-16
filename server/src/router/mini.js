const Mini = require('../service/mini');
const router = require('koa-router')();
router
  // .post('/miniApi/getQQopen',user.getOpen)
  .post("/miniApi/getIndexBanner",Mini.getIndexBanner)
  .post("/miniApi/getArticleDetail",Mini.getArticleDetails)
module.exports = router;
