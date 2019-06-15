// 环境域名配置
var baseUrl = "";
switch (process.env.NODE_ENV ){
  case 'development':
    baseUrl = "/api";  //这里是本地的请求url
    break;
  case "test" :
    baseUrl = "http://waterdropapitest.aldwx.com/";
    break;
  case  "production" :
    baseUrl = ""
}
export default baseUrl;