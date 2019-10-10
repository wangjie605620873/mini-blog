const user = require('../service/user');
const router = require('koa-router')();
router.post('/getQQopen',user.getQQopen);
router.post('/getOpen',user.getOpen)
router.post('/login',user.login)
router.post('/register',user.register);
module.exports = router;
