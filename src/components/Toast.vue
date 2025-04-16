<template>
  <Teleport to="body">
    <div class="toast-container">
      <TransitionGroup name="toast">
        <div
          v-for="toast in activeToasts"
          :key="toast.id"
          class="toast"
          :class="toast.type"
        >
          <div class="toast-content">
            <span class="toast-message">{{ toast.message }}</span>
            <button class="toast-dismiss" @click="removeToast(toast.id)">×</button>
          </div>
          <span v-if="toast.count > 1" class="toast-badge">
            {{ toast.count }}
          </span>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'

const toasts = ref([])
const activeToasts = computed(() => toasts.value)

const show = (message, type = 'info') => {
  // Check for existing similar toast
  const existingToast = toasts.value.find(t => t.message === message && t.type === type)
  
  if (existingToast) {
    existingToast.count++
    existingToast.timestamp = Date.now()
  } else {
    // Add new toast
    const id = Date.now()
    toasts.value.push({
      id,
      message,
      type,
      count: 1,
      timestamp: Date.now()
    })
  }

  // Clean up old toasts
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => 
      Date.now() - t.timestamp < 3000 || t.count > 1
    )
  }, 3000)
}

const removeToast = (id) => {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

defineExpose({ show })
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toast {
  min-width: 300px;
  padding: 16px 24px;
  border-radius: 8px;
  background: rgba(45, 45, 45, 0.9);
  color: white;
  position: relative;
  display: flex;
  align-items: center;
}

.toast-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.toast-message {
  flex: 1;
}

.toast-dismiss {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  padding: 0 4px;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.toast-dismiss:hover {
  opacity: 1;
}

.toast-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.toast.error {
  background: rgba(255, 68, 68, 0.9);
}

.toast.success {
  background: rgba(40, 199, 111, 0.9);
}

.toast.warning {
  background: rgba(255, 186, 0, 0.9);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.toast-move {
  transition: transform 0.3s ease;
}
</style>
