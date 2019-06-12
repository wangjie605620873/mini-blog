import axios from "axios";
import baseURL from '../../baseUrl'
let config = {
  header: {'Content-Type': 'application/x-www-form-urlencoded'},
  baseURL: baseURL,
  transformRequest: [function (data) {
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret.slice(0, ret.length - 1)
  }],
};
const _axios = axios.create(config);
_axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
_axios.interceptors.response.use(
  function (response) {return response.data;},
  function (error) {return Promise.reject(error);}
);
window.$axios = _axios;
window.axios = _axios;

export default Plugin;

