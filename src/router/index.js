import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import GridSystem from '../views/GridSystem.vue'
import ButtonIcon from '../views/ButtonIcon.vue'
import GridListPage from '../views/GridListPage.vue'

Vue.use(VueRouter)

const routes = [
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
