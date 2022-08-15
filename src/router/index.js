import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,Navbar,Footer
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },  {
    path: '/products',
    name: 'allProducts',
    component: () => import('../views/AllProducts.vue')
  },
  {
    path: '/products/:id',
    name: 'singleProduct',
    component: () => import('../views/SingleProduct.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
