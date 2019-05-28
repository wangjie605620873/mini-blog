const Koa = require('koa');
const app = new Koa();
const {Token_Test, Token_Test_Error} = require('./server/middleware/token/index');
const _router = require('./server/router/index');
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(Token_Test_Error);


app.use(Token_Test());

app.use(_router.routes());
app.use(_router.allowedMethods());


app.listen(4000, () => {
  console.log("success")
});