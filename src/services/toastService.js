let toastInstance = null

export const toastService = {
  setInstance(instance) {
    toastInstance = instance
  },
  
  success(message) {
    toastInstance?.show(message, 'success')
  },
  
  error(message) {
    toastInstance?.show(message, 'error')
  },
  
  warning(message) {
    toastInstance?.show(message, 'warning')
  }
}
