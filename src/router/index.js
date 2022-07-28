import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
