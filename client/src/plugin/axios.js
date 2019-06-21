import axios from "axios";
import baseURL from '../../baseUrl';
import qs from 'qs';

console.log(baseURL)
let config = {
  header: {'Content-Type': 'application/x-www-form-urlencoded'},
  baseURL: baseURL,
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
  function (config) {
    config.data = qs.stringify(config.data);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
_axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
const Axios = function (url,data,method) {
  console.log(data,'dt')
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

