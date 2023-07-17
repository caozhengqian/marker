import { createRouter, createWebHistory } from 'vue-router'
import SQL from '../views/SQL.vue'
import webRouter from "@/router/web";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SQL
    },
    {
      path: '/linux',
      name: 'linux',
      component: () => import('../views/linux.vue')
    },
    {
      path: '/SQL',
      name: 'SQL',
      component: () => import('../views/SQL.vue')
    },
    // {
    //   path: '/web',
    //   name: 'web',
    //   component: () => import('../views/web.vue')
    // },
    {
      path: '/web/css',
      name: 'web/css',
      component: () => import('../views/web/css.vue')
    },
    {
      path: '/nginx',
      name: 'nginx',
      component: () => import('../views/nginx.vue')
    },
    {
      path: '/java',
      name: 'java',
      component: () => import('../views/java.vue')
    },[...webRouter]
  ]
})

export default router
