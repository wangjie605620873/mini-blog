const crypto = require('crypto');
const Request = require('request');
const jwt = require('jsonwebtoken');
const {HttpSuccess,TokenException} = require('./HttpException')


/**
 * 生成唯一ID
 * @returns {String}
 */
const createUUID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
};


const salt = (password) => {
  let md5 = crypto.createHash('md5');
  let saltPassword = `${password}${password[0]}${password[password.length - 1]}`;
  return md5.update(saltPassword).digest('hex');
};


/**
 * request async packaging
 * @param options
 * @returns {Promise}
 * @options {request url, request method ,request body}
 */
const request = async (options) => {
  return new Promise((resolve, reject) => {
    Request({
      url: options.url,
      method: options.method || "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(options.data || {})
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(response)
      } else {
        reject(error)
      }
    });
  })
};


const Success = (data) => {
  throw new HttpSuccess(data)
};


const createToken = (phone) => {
  const secretKey = global.Config.secret.secretKey;
  const expiresIn = global.Config.secret.expirationTime;
  const token = jwt.sign({
    phone,
  }, secretKey, {
    expiresIn
  });
  return token
};


const verifyToken =  (token) => {
  let decodedInfo = "";
  let secretKey = global.Config.secret.secretKey;
  jwt.verify(token, secretKey,(error,decoded)=>{
    if (error){
      throw new TokenException("Token失效")
    }else{
      decodedInfo =  decoded
    }
  });
  return decodedInfo
};

module.exports = {
  createUUID,
  salt,
  request,
  Success,
  createToken,
  verifyToken
};

