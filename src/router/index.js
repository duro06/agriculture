import { createRouter, createWebHistory } from 'vue-router'
import SSOLayout from '../layouts/SSOLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'
import dashboardRoutes from './routes/dashboard'
import pertanianRoutes from './routes/pertanian'
import peternakanRoutes from './routes/peternakan'

const routes = [
  {
    path: '/',
    component: SSOLayout,
    children: [
      {
        path: '',
        name: 'SSO',
        component: () => import('../views/SSOPage.vue')
      }
    ]
  },
  {
    path: '/:appId',
    component: MainLayout,
    children: [
      dashboardRoutes,
      pertanianRoutes,
      peternakanRoutes
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
