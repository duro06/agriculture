import { createRouter, createWebHistory } from 'vue-router'
import { useSettingsStore } from '../stores/settings'
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

// Add navigation guard to set current app and menus
router.beforeEach((to, from, next) => {
  const settings = useSettingsStore()
  const appId = to.params.appId
  if (appId) {
    settings.setCurrentApp(appId)
  }
  next()
})

export default router
