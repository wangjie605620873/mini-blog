const MiniModel = require('../model/MiniModel');
class MiniService{
  async getSwiper(){
    let data = await MiniModel.findSwiper()
    let res = {
      code : 200,
      data : data
    };
    return res
  }
}
module.exports = new MiniService();