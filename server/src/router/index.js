const router = require('koa-router')();
const UserController = require('../controller/UserController');
// //用户相关
// const MiniController = require('../controller/MiniController');
// //栏目相关
// const ColumnController = require("../controller/ColumnController");

//用户相关
router
  .post('/login', UserController.login)
  // .post('/admin/addColumn', ColumnController.addColumn)
  // .post('/mini/getSwiper', MiniController.getSwiper);



module.exports = router;
