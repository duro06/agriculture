<template>
  <aside class="main-sidebar">
    <div class="brand-logo">
      <AvatarLogo class="brand-logo-icon" />
      <span class="brand-text">Udumbara</span>
    </div>
    
    <div class="sidebar-content">
      <nav class="sidebar-nav">
        <ul>
          <template v-for="(section, index) in settings.menus" :key="index">
            <li v-if="section.header" class="nav-header">{{ section.header }}</li>
            <li v-for="item in section.items" 
                :key="item.path" 
                class="nav-item">
              <router-link :to="item.path" 
                          class="nav-link" 
                          active-class="active">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </router-link>
            </li>
          </template>
        </ul>
      </nav>
    </div>

    <!-- Logout Button -->
    <div class="logout-sidebar-wrapper" @click="settings.logout(router)" title="Logout">
      <i class="fas fa-sign-out-alt logout-icon"></i>
      <span class="logout-text">Logout</span>
    </div>
  </aside>
</template>

<script setup>
import AvatarLogo from '../app/AvatarLogo.vue'
import { useSettingsStore } from '../../stores/settings'
import { useRouter } from 'vue-router'

const settings = useSettingsStore()
const router = useRouter()
</script>

<style scoped>
.main-sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #1e293b;
  color: white;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand-logo-icon {
  width: 32px;
  height: 32px;
}

.sidebar-content {
  flex: 1; /* Allow the menu to take up available space */
  overflow-y: auto; /* Enable scrolling for long menus */
  padding: 1rem;
}

.sidebar-nav {
  padding: 0;
}

.nav-header {
  color: var(--text-secondary);
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 1rem 0.5rem 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s;
  border-radius: 12px;
  margin: 0.25rem 0;
}

.nav-link i {
  margin-right: 1rem;
  font-size: 1.25rem;
  width: 1.5rem;
  text-align: center;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  transform: translateX(5px);
}

.nav-link.active {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.logout-sidebar-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background: linear-gradient(135deg, #0066cc, #003399);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 25px; /* Added space below the logout button */
}

.logout-sidebar-wrapper:hover {
  background: linear-gradient(135deg, #0052a3, #002266);
}

.logout-icon {
  font-size: 20px;
  margin-right: 8px;
}

.logout-text {
  font-size: 14px;
  font-weight: bold;
}
</style>
