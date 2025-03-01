<template>
  <aside class="main-sidebar">
    <div class="brand-logo">
      <i class="fas fa-cube text-2xl mr-3"></i>
      <span class="brand-text">NOVA</span>
    </div>
    
    <nav class="sidebar-nav">
      <ul>
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">
            <i class="fas fa-chart-scatter"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/analytics" class="nav-link" active-class="active">
            <i class="fas fa-analytics"></i>
            <span>Analytics</span>
          </router-link>
        </li>
        <li class="nav-header">APPLICATIONS</li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link" active-class="active">
            <i class="fas fa-project-diagram"></i>
            <span>Projects</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tasks" class="nav-link" active-class="active">
            <i class="fas fa-tasks"></i>
            <span>Tasks</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.brand-logo {
  font-size: 1.5rem;
  letter-spacing: 1px;
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
