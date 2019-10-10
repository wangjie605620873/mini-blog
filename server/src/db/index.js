const Sequelize = require('sequelize');
const {Config} = require('../../config/config');
const {dbname,user,password,host, port} = Config.dbConfig;
const sequelize = new Sequelize(dbname, user, password,
  {
    dialect : "mysql",
    host,
    port,
    logging : true,
    define : {
      "createdAt" : "create_at",
      "updatedAt" : "update_at",
      "deletedAt" : "deleted_at",
      underscored : true,

    },
    dialectOptions: {
      dateStrings: true, // 禁止 mysql 的转换
      typeCast: true, // 覆盖 sequelize 的转换
    },
    timezone: '+08:00'
  }
);


// sequelize.sync({
//   force : true
// });

sequelize.sync();
module.exports = sequelize;