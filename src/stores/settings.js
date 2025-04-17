import { acceptHMRUpdate, defineStore } from 'pinia'
import api from '../plugins/axios' // Import the Axios instance
import dashboardMenus from '../config/menus/dashboard'
import pertanianMenus from '../config/menus/pertanian'
import peternakanMenus from '../config/menus/peternakan'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    currentApp: localStorage.getItem('currentApp') || '', // Load from localStorage
    apps: [
      { 
        id: 'dashboard', 
        name: 'Dashboard', 
        icon: 'fas fa-chart-line',
        menus: dashboardMenus
      },
      { 
        id: 'pertanian', 
        name: 'Pertanian', 
        icon: 'fas fa-seedling',
        menus: pertanianMenus
      },
      { 
        id: 'peternakan', 
        name: 'Peternakan', 
        icon: 'fas fa-horse',
        menus: peternakanMenus
      }
    ],
    menus: JSON.parse(localStorage.getItem('menus')) || [], // Load from localStorage
    isLoading: false // Add loading state
  }),

  actions: {
    async logout(router) {
      if (this.isLoading) return // Prevent multiple calls
      this.isLoading = true
      try {
        // Call the backend logout API
        await api.post('v1/auth/logout')
        
        // Clear the token and reset settings
        localStorage.removeItem('token')
        this.clearSettings()

        // Redirect to the login page
        router.push('/login')
      } catch (error) {
        console.error('Logout failed:', error)
        // Optionally, handle the error (e.g., show a toast notification)
      } finally {
        this.isLoading = false
      }
    },
    setCurrentApp(appId) {
      if (appId === this.currentApp) return
      
      this.currentApp = appId
      localStorage.setItem('currentApp', appId) // Save to localStorage

      const app = this.apps.find(a => a.id === appId)
      if (app) {
        this.menus = app.menus
        localStorage.setItem('menus', JSON.stringify(app.menus)) // Save to localStorage
      }
      console.log('Current menus:', this.menus) // For debugging
    },
    clearSettings() {
      this.currentApp = null
      this.menus = []
      localStorage.removeItem('currentApp') // Clear from localStorage
      localStorage.removeItem('menus') // Clear from localStorage
    }
  }
})

// Enable HMR for the store
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot))
}
