import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/upload',
      name: 'about',
      component: () => import('../views/upload.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path : "/admin",
      component : () => import('../views/admin/index.vue'),
      children:[{
        path : "index",
        name : "index",
        component : () => import('../views/index/index.vue')
      }],
    }
  ]
})
