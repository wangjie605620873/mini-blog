const Commonality = require('../service/commonality');
const router = require('koa-router')();
router.post('/uploadImage',Commonality.uploadImage);

module.exports = router;








