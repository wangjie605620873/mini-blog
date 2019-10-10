import './assets/css/index.less'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import element from 'element-ui'
import * as filters from './assets/js/filter'
import * as directives from './assets/js/directives'
import 'element-ui/lib/theme-chalk/index.css';
import './plugin/axios'


Vue.config.productionTip = false;
Vue.use(element);
//全局注册directive
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]())
});
//注册全局filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.prototype.$error = function (mes) {
  if (typeof mes === "String") {
    Vue.prototype.$message.error(mes)
  } else if (mes instanceof Array) {
    mes.map((item, index) => {
      for (let key in item) {
        Vue.prototype.$message({
          message: item[key],
          type: "error",
          offset: (index + 1) * 50,
          duration: 2000 + (index + 1) * 1000
        })
      }
    })
  }
};

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
