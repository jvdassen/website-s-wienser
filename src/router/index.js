import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Images.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Images',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
