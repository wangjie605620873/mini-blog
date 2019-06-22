import axios from "axios";
import baseURL from '../../baseUrl';
import qs from 'qs';
import {getCookie} from "../assets/js/api"
import Router from '../router/router'
let config = {
  header: {'Content-Type': 'application/x-www-form-urlencoded'},
  baseURL: baseURL,
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
  function (config) {
    let data = config.data || {};
    if (config.url != '/login' &&  config.url != '/register'){
      data.token =  getCookie('token');
      data.phone = getCookie('phone');
      config.headers.Authorization = `Bearer ${data.token}`;
    }
    data = qs.stringify(data);
    config.data = data;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
_axios.interceptors.response.use(
  function (response) {
    if (response.data.code == 205){
      Router.push({path : "/login"})
      return
    }
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
const Axios = function (url,data,method) {
  return new Promise((resolve, reject)=>{
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

