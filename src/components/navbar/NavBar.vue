<template>
  <nav class="main-header">
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
</style>
