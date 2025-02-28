<template>
  <div class="dashboard">
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="card stats-card">
        <div class="stats-card-icon" style="background: var(--primary)">
          <span class="material-icons">weekend</span>
        </div>
        <div class="stats-card-number">$3,499</div>
        <div class="stats-card-label">Today's Sales</div>
      </div>

      <div class="card stats-card">
        <div class="stats-card-icon" style="background: var(--info)">
          <span class="material-icons">leaderboard</span>
        </div>
        <div class="stats-card-number">+55%</div>
        <div class="stats-card-label">Weekly Growth</div>
      </div>

      <div class="card stats-card">
        <div class="stats-card-icon" style="background: var(--success)">
          <span class="material-icons">store</span>
        </div>
        <div class="stats-card-number">$23,685</div>
        <div class="stats-card-label">Revenue</div>
      </div>

      <div class="card stats-card">
        <div class="stats-card-icon" style="background: var(--warning)">
          <span class="material-icons">person_add</span>
        </div>
        <div class="stats-card-number">+245</div>
        <div class="stats-card-label">New Users</div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div class="card">
        <div class="p-6">
          <h3 class="text-lg font-medium mb-4">Monthly Sales</h3>
          <!-- Chart component will go here -->
        </div>
      </div>
      
      <div class="card">
        <div class="p-6">
          <h3 class="text-lg font-medium mb-4">Performance</h3>
          <!-- Chart component will go here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Chart implementations will go here
</script>

<style scoped>
.grid {
  display: grid;
}

.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

.gap-6 { gap: 1.5rem; }
.mt-6 { margin-top: 1.5rem; }
.mb-4 { margin-bottom: 1rem; }
.p-6 { padding: 1.5rem; }
.text-lg { font-size: 1.125rem; }
.font-medium { font-weight: 500; }
</style>
