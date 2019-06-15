const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const {Token_Test, Token_Test_Error} = require('./middleware/token/index');
const _router = require('./router/index');
const bodyParser = require('koa-body');


const serve = require('koa-static');
const path = require('path');
const port = process.env.PORT || 5555;
const staticPath = "./static";
global.STATICURL = "http://127.0.0.1:5555/"
app
  .use(async (ctx,next)=>{
    await next()
  })
  .use(cors())
  .use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      console.log(err)
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit("error", err, ctx);
    }
  })
  .use(bodyParser({
    multipart: true,
    formidable: {
      maxFieldsSize: 10 * 1024 * 1024,
      multipart: true
    }
  }))
  .use(Token_Test_Error)
  .use(Token_Test())
  .use(serve(path.join(process.cwd(), staticPath)))
  .use(_router.routes())
  .use(_router.allowedMethods())
  .listen(port, () => {
    // console.log(`port :${port} success`)
  });
