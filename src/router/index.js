import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'






const routes = [
  { path: '/', name: 'home', component: Home }, 
  { path: '/brazil', name: 'brazil', component: () => import('@/views/BrazilView.vue')},
  { path: '/hawai', name: 'hawai', component: () => import('@/views/HawaiView.vue')},
  { path: '/jamaica', name: 'jamaica', component: () => import('@/views/JamaicaView.vue') },
  { path: '/panama', name: 'panama', component: () => import('@/views/PanamaView.vue') },
]

const router = createRouter( {
  history: createWebHistory(),
  routes,
})

export default router