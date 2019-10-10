const column = require('../service/column');
const router = require('koa-router')();

router
  .post('/addColumn', column.addColumn)
  .post('/delColumn', column.delColumn)
  .post('/getColumn',column.getColumn)
  .post('/addColumnUploadImg',column.addColumnUploadImg)
module.exports = router;
