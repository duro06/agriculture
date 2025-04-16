import { ref } from 'vue'

const toasts = ref([])

export function useToast() {
  const add = (message, type = 'info') => {
    const id = Date.now()
    toasts.value.push({ id, message, type })
    setTimeout(() => {
      remove(id)
    }, 3000)
  }

  const remove = (id) => {
    const index = toasts.value.findIndex(toast => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  return {
    toasts,
    success: (message) => add(message, 'success'),
    error: (message) => add(message, 'error'),
    warning: (message) => add(message, 'warning'),
  }
}
