import { toastService } from '../services/toastService'

export const handleErrorMessage = (error) => {
  const message = error.response?.data?.message || error.message || 'An error occurred'
  console.log('Error :', error);
  if(error.response?.status === 422) {

    const errors= error.response?.data?.errors
    const keys = Object.keys(errors)
    console.log('Errors nya', keys,errors);
    
    if(keys.length > 0) {
      keys.forEach(error => {toastService.error(errors[error][0])})
    }
  }
  else toastService.error(message)
  return message
}

export const handleSuccessMessage = (message) => {
  console.log('Success :', message);
  
  toastService.success(message)
  return message
}
