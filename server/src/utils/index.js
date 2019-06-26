const crypto = require('crypto');
const Request = require('request');

function createUUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

function salt(password) {
  let md5 = crypto.createHash('md5');
  let saltPassword = `${password}${password[0]}${password[password.length - 1]}`
  return md5.update(saltPassword).digest('hex');
}

 async function request(options) {
  return new Promise((resolve, reject) => {
    Request({
      url: options.url,
      method: options.method || "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(options.data || {})
    }, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(response)
      }else{
        reject(error)
      }
    });
  })
}

module.exports = {
  createUUID,
  salt,
  request
};

