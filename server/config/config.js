
const Config = {
  env : "dev",
  url : "",
  baseUrl : "http://127.0.0.1",
  serverPort : "5555",
  staticPath : "static",
  filePath : "/upload",

  dbConfig : {
    dbname : "mini_blog",
    user : "root",
    password : "1235267618",
    host : "localhost",
    port : "3306"
  },
  secret : {        //生成token相关配置
    secretKey : "abcdefg",
    expirationTime : 60*60
  },
  wx:{
    appId:'',
    appSecret:'',
  },
  qq : {
    appId:'',
    appSecret:'',
  }
};
module.exports = {
  Config
};
