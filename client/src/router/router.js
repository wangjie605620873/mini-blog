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
      path : "/register",
      name : 'register',
      component: () => import('../views/register/index.vue')
    },
    {
      path : "/index",
      name : "index",
      component: () => import('../views/index/index.vue')
    },
    {
      path : "/writeMarkdown",
      name : "writeMarkdown",
      component: () => import('../views/writeMarkdown/index.vue')
    },
    {
      path: "/admin",
      component: () => import('../views/admin/index.vue'),
      children: [
        {
          path: "column",
          name: "column",
          component: () => import('../views/column/index.vue')
        },
        {
          path : "addColumn",
          name : 'addColumn',
          component: () => import('../views/addColumn/index.vue')
        },
        {
          path : "drafts",
          name : "drafts",
          component : () => import('../views/drafts/index.vue')
        }
      ],
    }
  ]
})
