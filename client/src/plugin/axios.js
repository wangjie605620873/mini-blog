import axios from "axios";
import baseURL from '../../baseUrl';
import qs from 'qs';
import {getCookie} from "../assets/js/api"
import Router from '../router/router'
let config = {
  header: {'Content-Type': 'application/x-www-form-urlencoded','Referer': 'https://www.baidu.com'},
  baseURL: baseURL,

};
const _axios = axios.create(config);
_axios.interceptors.request.use(
  function (config) {
    let data = config.data || {};
    if (config.url != '/login' &&  config.url != '/register'){
      data.token =  getCookie('web_token');
      data.phone = getCookie('phone');
    }
    // console.log(data,'1')
    // data = qs.stringify(data);
    // console.log(data,'2')
    console.log(data,'1111111')
    config.data = data;
    return config;



  },
  function (error) {
    return Promise.reject(error);
  }
);
_axios.interceptors.response.use(
  function (response) {
    if (response.data.code == 210){
      Router.push({path : "/login"});
      return
    }
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
const Axios = function (url,data,method) {
  return new Promise((resolve)=>{
    _axios({
      url : url,
      data : data,
      method : method || 'POST'
    }).then((res)=>{
      resolve(res)
    }).catch((err)=>{
      resolve(err)
    })
  })
};
window.$axios = Axios;
window.axios = Axios;
window.baseURL = baseURL;
export default Plugin;

