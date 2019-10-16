import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      path : "/articleDetails",
      name : "articleDetails",
      component : () => import('../views/articleDetails/index.vue')
    },
    {
      path: "/admin",
      component: () => import('../views/admin/index.vue'),
      children: [
        {
          path : "index",
          name : "index",
          component: () => import('../views/admin/overview/index.vue')
        },
        {
          path : "writeMarkdown",
          name : "writeMarkdown",
          component: () => import('../views/admin/writeMarkdown/index.vue')
        },
        {
          path : "personage",
          name : "personage",
          component: () => import('../views/admin/personage/index.vue')
        },

        {
            path: "manage",
            name : "manage",
            component: () => import('../views/admin/manage/index.vue'),
            redirect : {name : "column"},
            children: [
              {
                path: "column",
                name: "column",
                component: () => import('../views/admin/manage/column/index.vue')
              },
              {
                path : "addColumn",
                name : 'addColumn',
                component: () => import('../views/admin/manage/addColumn/index.vue')
              },
              {
                path : "drafts",
                name : "drafts",
                component : () => import('../views/admin/manage/drafts/index.vue')
              },
              {
                path : "article",
                name : "article",
                component : () => import('../views/admin/manage/article/index.vue')
              },
            ]

        },





      ],
    }
  ]
})
