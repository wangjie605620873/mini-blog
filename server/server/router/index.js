const router = require('koa-router')();
const UserController = require('../controller/UserController');
const MiniController = require('../controller/MiniController');

router
  // .post('/login', UserCtrl.login)
  // .post('/test', UserCtrl.test)
  .post('/mini/getSwiper', MiniController.getSwiper);

module.exports = router;
