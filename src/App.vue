<template>
  <router-view />
  <Toast />
</template>

<script setup>
import Toast from './components/Toast.vue'
</script>

<style>
@import './assets/css/material.css';

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
}
</style>
