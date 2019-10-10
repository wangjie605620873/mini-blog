import './utils/api'
require('./utils/ald-stat.js')
App({
  onLaunch: function () {
  },
  onShow:function(){
    wx.request({
      url: 'http://localhost:7777/get',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        referer:
  'https://servicewechat.com/wxf0269c63d06da757/devtools/page-frame.html',

      },
      method: "POST",
      success: (res) => {
        resolve(res)
      },
    })
  },
  globalData: {
    userInfo: null
  },
})