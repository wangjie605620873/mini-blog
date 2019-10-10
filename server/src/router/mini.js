const user = require('../service/user');
const router = require('koa-router')();
router.post('/miniApi/getQQopen',user.getOpen);
module.exports = router;
