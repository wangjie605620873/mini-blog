const MiniService = require('../service/MiniService')
class MiniController{
  async getSwiper(ctx,next){
    // const res = await MiniService.getSwiper();
    // ctx.body = res;
    // await next
  }
}
module.exports = new MiniController();