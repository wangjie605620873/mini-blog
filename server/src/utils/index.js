const crypto = require('crypto');

function createUUID() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}
function salt(password) {
  let md5 = crypto.createHash('md5');
  let saltPassword = `${password}${password[0]}${password[password.length-1]}`
  return md5.update(saltPassword).digest('hex');
}
module.exports= {
  createUUID,
  salt
};

