<template>
  <div class="sso-wrapper">
    <router-view />
  </div>
</template>

<style scoped>
.sso-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--background), #1e293b);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
