<template>
  <img :src="logoUrl" alt="Logo" />
</template>

<script setup>
import logoUrl from '../../assets/icon.svg'

defineProps({
  size: {
    type: String,
    default: 'lg'
  }
})
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>