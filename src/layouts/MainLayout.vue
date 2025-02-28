<template>
  <div class="wrapper">
    <!-- Navbar -->
    <nav-bar />
    
    <!-- Main Sidebar -->
    <side-bar />

    <!-- Content Wrapper -->
    <div class="content-wrapper bg-gray-100 min-h-screen ml-64 pt-16">
      <!-- Main Content -->
      <div class="p-4">
        <router-view />
      </div>
    </div>

    <!-- Footer -->
    <footer class="main-footer ml-64 p-4 text-sm text-gray-600 border-t">
      <strong>Copyright &copy; 2024</strong>
      All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import NavBar from '../components/navbar/NavBar.vue'
import SideBar from '../components/sidebar/SideBar.vue'
</script>

<style>
.wrapper {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}
</style>
