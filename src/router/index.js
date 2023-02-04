import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Brazil from '@/views/BrazilView.vue'
import Hawai from '@/views/HawaiView.vue'
import Jamaica from '@/views/JamaicaView.vue'
import Panama from '@/views/PanamaView.vue'


const routes = [
  { path: '/', name: 'home', component: Home }, 
  { path: '/brazil', name: 'brazil', component: Brazil },
  { path: '/hawai', name: 'hawai', component: Hawai },
  { path: '/jamaica', name: 'jamaica', component: Jamaica },
  { path: '/panama', name: 'panama', component: Panama },
]

const router = createRouter( {
  history: createWebHistory(),
  routes,
})

export default router