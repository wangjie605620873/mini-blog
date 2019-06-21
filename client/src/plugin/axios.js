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
  function (response) {return response.data;},
  function (error) {return Promise.reject(error);}
);
window.$axios = _axios;
window.axios = _axios;
window.baseURL = baseURL;
export default Plugin;

