import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '@/views/HomeView.vue'

const routes = [
  {
    path: '/', name: 'Home', component: HomeViewVue
  }
]

const router = createRouter( {
  history: createWebHistory(),
  routes
})

export default router