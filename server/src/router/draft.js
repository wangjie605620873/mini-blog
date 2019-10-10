const draft  = require('../service/draft');
const router = require('koa-router')();
router
  .post('/articleDraft',draft.articleDraft)
  .post('/getDrafts',draft.getDrafts)
  .post("/getDraftArticle",draft.getDraftArticle)
  .post("/delDrafts",draft.delDrafts)
  .post("/publishDrafts",draft.publishDrafts)

module.exports = router;
