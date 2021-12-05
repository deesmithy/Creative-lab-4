import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import People from '../views/People.vue'
import FAQ from '../views/FAQ.vue'
import Publications from '../views/Publications.vue'
import Projects from '../views/Projects.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/people',
    name: 'people',
    component: People
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ
  },
  {
    path: '/publications',
    name: 'publications',
    component: Publications
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
