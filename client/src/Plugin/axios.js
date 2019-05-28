import axios from "axios"
// import Echarts from './echarts'
import {delCookie, getCookie} from "../Api/index"

let config = {
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseURL: " http://localhost:4000",
  transformRequest: [function (data) {
    // data.token = getCookie('token');
    let ret = '';
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret.slice(0, ret.length - 1)
  }]
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};


const _axios = axios.create(config);
_axios.interceptors.request.use(
  function (config) {
    config.headers.common['Authorization'] = 'Bearer ' +  getCookie('token');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (response.data.code == 201) {
      //删除 之前token 和 app_key  cookie
      // delCookie('ald_token');
      // delCookie('ald_app_key');
      // router.push({path: "/login"})
    }
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default _axios
