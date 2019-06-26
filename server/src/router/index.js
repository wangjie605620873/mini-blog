const router = require('koa-router')();
// //用户相关
// const MiniController = require('../controller/MiniController');
// //栏目相关
const UserController = require('../controller/UserController');
const ColumnController = require("../controller/ColumnController");

router
  .post('/login', UserController.login)
  .post('/register',UserController.register)
  .post('/getOpen',UserController.getOpen)
  .post('/admin/addColumn', ColumnController.addColumn)
  .post('/addColumnUploadImg', ColumnController.addColumnUploadImg)
  .post('/admin/getColumn',ColumnController.getColumn)

module.exports = router;
