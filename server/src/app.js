const Koa = require('koa');
const app = new Koa();
require('koa-validate')(app);
const cors = require('koa2-cors');
const AppMerge= require('./lib/AppMerge');
const bodyParser = require('koa-body');
app.use(cors());
app.use(bodyParser({multipart: true, formidable: {maxFieldsSize: 10 * 1024 * 1024, multipart: true}}));
new AppMerge(app);
app.listen(global.Config.serverPort, () => {
  console.log(`port :${global.Config.serverPort} success`)
});
