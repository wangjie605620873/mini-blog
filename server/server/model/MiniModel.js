const {query} = require('../../db/index');
class MiniModel{
  //轮播图
  async findSwiper(){
    let Sql = `SELECT banner_id,create_time FROM banner`;
    return await query(Sql);
  }
}
module.exports = new MiniModel();