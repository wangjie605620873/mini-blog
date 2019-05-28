const mysql = require('mysql2');
const config = require('../config/mysql-config')
let pool = mysql.createPool(config);
let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
        console.log(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
            console.log(err)
          } else {
            console.log('mysql concat success')
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = {query};
