import regeneratorRuntime from '../../utils/regenerator-runtime/runtime-module.js'
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onShow: function () {
    this.getSwiper()
  },
  async getSwiper(){
    let res = await wx.Fetch('mini/getSwiper');
    
  },
 onShareAppMessage: function () {

  }
})