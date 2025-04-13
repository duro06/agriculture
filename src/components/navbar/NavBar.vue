<template>
  <nav class="main-header">
    <router-link to="/" class="nav-link nav-icon sso-button" data-tooltip="Switch Apps">
      <i class="fas fa-th"></i>
    </router-link>

    <div class="flex-grow"></div>
    <div class="nav-right">
      <a href="#" class="nav-link nav-icon">
        <i class="fas fa-search"></i>
      </a>
      <a href="#" class="nav-link nav-icon">
        <i class="fas fa-bell"></i>
        <span class="badge animate-pulse">3</span>
      </a>
      <div class="nav-link user-menu">
        <div class="user-avatar">
          <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" class="avatar" alt="User" />
          <span class="status-dot"></span>
        </div>
        <span class="user-name">Admin User</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useSettingsStore } from '../../stores/settings'

const settings = useSettingsStore()
</script>

<style scoped>
.nav-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-link {
  position: relative;
  padding: 10px;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s;
  border-radius: 12px;
  backdrop-filter: blur(4px);
}

.nav-icon {
  background: rgba(255, 255, 255, 0.05);
  width: 42px;
  height: 42px;
  justify-content: center;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link i {
  font-size: 18px;
}

.badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background: linear-gradient(135deg, var(--danger), #fb7185);
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--background);
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 16px;
  margin-left: 8px;
}

.user-avatar {
  position: relative;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.status-dot {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: var(--success);
  border-radius: 50%;
  border: 2px solid var(--background);
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

.flex-grow {
  flex: 1;
}

.sso-button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  position: relative;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sso-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

/* Tooltip */
[data-tooltip] {
  position: relative;
}

[data-tooltip]:before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
}

[data-tooltip]:hover:before {
  opacity: 1;
  visibility: visible;
}
</style>
