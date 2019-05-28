import regeneratorRuntime from './regenerator-runtime/runtime-module.js'
var baseUrl = 'http://127.0.0.1:4000/';
wx.Fetch = async function(url, data = {}) {
  return await new Promise(function (resolve, reject) {
    wx.request({
      url: baseUrl + url,
      data: data,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: async (res)=>{
        resolve(res)
      },
      fail(error) {
        reject(error)
      }
    })
  })
};
