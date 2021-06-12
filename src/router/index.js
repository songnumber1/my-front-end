import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import GridSystem from '../views/GridSystem.vue'
import ButtonIcon from '../views/ButtonIcon.vue'
import GridListPage from '../views/GridListPage.vue'
import Login from '../views/Login.vue'
import Tables from '../views/Tables.vue'
import Forms from '../views/Forms.vue'
import Buttons from '../views/Buttons.vue'
import Icons from '../views/Icons.vue'

import SignIn from '@/views/authentication/SignIn'
 import SignUp from '@/views/authentication/SignUp'
import ProductList from '@/views/page/ProductList'

import DefaultLayout from '@/layouts/default/Index'
import PageLayout from '@/layouts/page/Index'
import AuthenticationLayout from '@/layouts/authentication/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
      },
      {
        path: '/button-icon',
        name: 'ButtonIcon',
        component: ButtonIcon
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: '/forms',
        name: 'Forms',
        component: Forms
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons
      },
      {
        path: '/icons',
        name: 'Icons',
        component: Icons
      },
    ],
  },
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component:SignUp
      },
    ]
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: ProductList
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
