import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: Home }, 
  { 
    path: '/destination/:id/:slug', 
    name: 'destination', 
    component: () => import('@/views/DestinationView.vue'),
    props: route => ( {...route.params, id: parseInt(route.params.id)})
  },
  { 
    path: '/destination/:id/:slug/:experienceSlug', 
    name: 'experience.show', 
    component: () => import('@/views/ExperienceView.vue'),
    props: route => ( {...route.params, id: parseInt(route.params.id)})
  }
]

const router = createRouter( {
  history: createWebHistory(),
  routes,
})

export default router