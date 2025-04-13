import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import dashboardRoutes from './routes/dashboard'
import pertanianRoutes from './routes/pertanian'
import peternakanRoutes from './routes/peternakan'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
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
