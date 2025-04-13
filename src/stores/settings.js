import { defineStore } from 'pinia'
import dashboardMenus from '../config/menus/dashboard'
import pertanianMenus from '../config/menus/pertanian'
import peternakanMenus from '../config/menus/peternakan'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    currentApp: '',
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
        icon: 'fas fa-fish',
        menus: peternakanMenus
      }
    ],
    menus: []
  }),

  actions: {
    setCurrentApp(appId) {
      this.currentApp = appId
      const app = this.apps.find(a => a.id === appId)
      if (app) {
        this.menus = app.menus
      }
    }
  }
})
