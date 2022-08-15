import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import HomeView from '../views/admin/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  // ADMIN
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/Admin.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/admin/Product.vue'),
  },
  {
    path: '/receipt',
    name: 'receipt',
    component: () => import('../views/admin/Receipt.vue'),
  },
  {
    path: '/statistical',
    name: 'statistical',
    component: () => import('../views/admin/Statistical.vue'),
  },
  {
    path: '/turnover',
    name: 'turnover',
    component: () => import('../views/admin/branchs/Turnover.vue')
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: () => import('../views/admin/branchs/Inventory.vue')
  },
  {
    path: '/branch1',
    name: 'branch1',
    component: () => import('../views/admin/branchs/Branch1.vue')
  },
  {
    path: '/branch2',
    name: 'branch2',
    component: () => import('../views/admin/branchs/Branch2.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/admin/Setting.vue'),
  },
  {
    path: '/loginAcc',
    name: 'loginAcc',
    component: () => import('../views/account/Login.vue'),
  },
  {
    path: '/learnVueX',
    name: 'learnVueX',
    component: () => import('../components/unit7/LearnVueX.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/unit7/post7_1.vue')

  },
  {
    path: '/CRUD',
    name: 'CRUD',
    component: () => import('../views/unit7/post7_2.vue')
  },
  {
    path: '/testLodash',
    name: 'testLodash',
    component: () => import('../components/session8/testLodash.vue')
  },
  {
    path: '/unit8/products',
    name: 'products',
    component: () => import('../components/unit8/products')
  },
  {
    path: '/CRUDApi',
    name: 'CRUDApi',
    component: () => import('../components/unit9/CRUDApi.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
