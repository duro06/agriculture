<template>
  <aside class="main-sidebar">
    <div class="brand-logo">
      <AvatarLogo class="brand-logo-icon" />
      <span class="brand-text">Udumbara</span>
    </div>
    
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
  </aside>
</template>

<script setup>
import AvatarLogo from '../app/AvatarLogo.vue';
import { useSettingsStore } from '../../stores/settings';

const settings = useSettingsStore();
</script>

<style scoped>
.brand-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-logo-icon {
  width: 32px;
  height: 32px;
}

.sidebar-nav {
  padding: 1.5rem 1rem;
}

.nav-header {
  color: var(--text-secondary);
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 1.5rem 1rem 0.5rem;
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
</style>
