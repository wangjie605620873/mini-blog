/*
  uname: 数据库登录名
  upwd: 数据库登录密码
  host: 数据库主机
  port: 数据库端口，mysql默认是3306
  dialect: 数据库类型，这里是mysql
  pool: 连接池配置

  */
const config = {
  host: 'localhost',
  user: 'root',
  database: 'koa_test',
  password: '1235267618',
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
};
module.exports = config;
