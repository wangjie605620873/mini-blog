const Koa = require('koa');
const app = new Koa();
const {Token_Test, Token_Test_Error} = require('./middleware/token/index');
const _router = require('./router/index');
const bodyParser = require('koa-bodyparser');
const formidable = require('koa-formidable'); // 图片处理
const serve = require('koa-static');
const path = require('path');
const port = process.env.PORT || 5555;
const staticPath = "../static";
app.use(bodyParser());
app.use(serve(path.join(__dirname,staticPath)));

app.use(Token_Test_Error);
app.use(Token_Test());
app.use(_router.routes());
app.use(_router.allowedMethods());


app.listen(port, () => {console.log(`port :${port} success`)});
