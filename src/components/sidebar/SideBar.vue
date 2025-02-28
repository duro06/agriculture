<template>
  <aside class="main-sidebar">
    <div class="brand-logo">
      <span class="material-icons">dashboard</span>
      <span class="ml-3">Material Dashboard</span>
    </div>
    
    <nav class="sidebar-nav">
      <ul>
        <li>
          <router-link to="/" class="nav-link" active-class="active">
            <span class="material-icons">space_dashboard</span>
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/profile" class="nav-link" active-class="active">
            <span class="material-icons">person</span>
            <span>Profile</span>
          </router-link>
        </li>
        <li>
          <router-link to="/tables" class="nav-link" active-class="active">
            <span class="material-icons">table_chart</span>
            <span>Tables</span>
          </router-link>
        </li>
        <li>
          <router-link to="/notifications" class="nav-link" active-class="active">
            <span class="material-icons">notifications</span>
            <span>Notifications</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar-nav {
  padding: 1rem 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 2rem;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  transition: all 0.3s;
}

.nav-link .material-icons {
  margin-right: 1rem;
}

.nav-link:hover, .nav-link.active {
  color: var(--primary);
  background: rgba(123, 31, 162, 0.05);
}

.nav-link.active {
  font-weight: 500;
}
</style>
