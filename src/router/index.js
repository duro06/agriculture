import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import DashboardPage from '../views/DashboardPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: DashboardPage
      },
      // Add more routes here
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
