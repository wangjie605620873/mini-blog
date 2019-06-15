import './assets/css/index.less'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './plugin/axios'
Vue.config.productionTip = false;
Vue.use(element);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
