<template>
  <nav class="main-header">
    <div class="flex-grow"></div>
    
    <div class="nav-right">
      <a href="#" class="nav-link">
        <i class="fas fa-search"></i>
      </a>
      <a href="#" class="nav-link">
        <i class="fas fa-bell"></i>
        <span class="badge">3</span>
      </a>
      <div class="nav-link user-menu">
        <img src="https://ui-avatars.com/api/?name=Admin+User" class="avatar" alt="User" />
        <span class="user-name">Admin User</span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  position: relative;
  padding: 8px 12px;
  color: #344767;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s;
  border-radius: 8px;
}

.nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.nav-link i {
  font-size: 20px;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
  background: #f44336;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(50%, -50%);
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 8px;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 8px;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #344767;
}

.flex-grow {
  flex: 1;
}
</style>
