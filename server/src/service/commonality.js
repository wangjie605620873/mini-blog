const UpLoader = require('../lib/upLoader');
const {Success} = require('../lib/utils');


class Commonality{
  static async uploadImage(ctx,next){
    let filePath = await new UpLoader().upImage(ctx);

    Success({imageUrl : filePath});
    await next()
  }
}

module.exports = Commonality;