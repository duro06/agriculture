import { createRouter, createWebHistory } from 'vue-router'
import { useSettingsStore } from '../stores/settings'
import SSOLayout from '../layouts/SSOLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'
import dashboardRoutes from './routes/dashboard'
import pertanianRoutes from './routes/pertanian'
import peternakanRoutes from './routes/peternakan'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/',
    component: SSOLayout,
    meta: { requiresAuth: true },
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
    meta: { requiresAuth: true },
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

// Add navigation guard to check authentication and set current app
router.beforeEach((to, from, next) => {
  const settings = useSettingsStore()
  const isAuthenticated = !!localStorage.getItem('token') // You'll need to add this to your settings store
  console.log('isAuthenticated', isAuthenticated);
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login')
      return
    }
  }

  const appId = to.params.appId
  if (appId) {
    settings.setCurrentApp(appId)
  }
  next()
})

export default router
