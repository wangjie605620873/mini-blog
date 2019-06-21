// 时间戳转日期
const timeToDate = (val) =>{
  let date = new Date(val/1);
  let y = date.getFullYear();
  let m =  date.getMonth();
  let d =  date.getDate();
  return `${y}年${m}月${d}日`
};
export {
  timeToDate
}