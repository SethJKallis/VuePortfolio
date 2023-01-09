import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: function() {
      return import('../views/ResumeView.vue')
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: function() {
      return import('../views/ProjectsView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function() {
      return import('../views/ContactView.vue')
    }
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialsView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
