
import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/books',
    name: 'books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/bookedit/:id',
    name: 'bookedit',
    component: () => import('../views/BookEdit.vue')
  },
  {
    path: '/issues',
    name: 'issue',
    component: () => import('../views/Issues.vue')
  },
  {
    path: '/authors',
    name: 'author',
    component: () => import('../views/Authors.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

