import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import data from '@/data/data.json'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/destination/:id/:slug',
    name: 'destination',
    component: () => import('@/views/DestinationView.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from) {
      const exists = data.destinations.find(destination => destination.id === parseInt(to.params.id))
      if (!exists) return {
        name: 'notFound',
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceView.vue'),
        props: route => ({ ...route.params, id: parseInt(route.params.id) })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFoundView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise( (resolve) => {
      setTimeout(() => resolve( { top: 0 }), 500)
    }) 
  }
})

export default router