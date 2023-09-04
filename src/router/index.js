import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import JiYi from '../views/jiyi/JiYi.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/Marker.vue')
  },
  {
    path: '/jiyi',
    name: 'jiyi',
    component: ()=>import('../views/jiyi/JiYi.vue')
  },
  {
    path: '/inserData',
    name: 'inserData',
    component: ()=>import('../views/jiyi/InsertData.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
