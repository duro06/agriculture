<template>
  <div class="page">
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <h1>Agricultre App</h1>
          <p>Welcome back! Please login to continue.</p>
        </div>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              id="email"
              type="email" 
              v-model="email"
              @input="validateEmail"
              required
              class="form-input"
              :class="{ 'input-error': emailError }"
            />
            <span v-if="emailError" class="error-message">{{ emailError }}</span>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              id="password"
              type="password" 
              v-model="password"
              required
              class="form-input"
            />
          </div>
          <button 
            type="submit" 
            class="btn-primary" 
            :disabled="isLoading || !!emailError"
          >
            <i v-if="isLoading" class="fas fa-spinner spinner"></i>
            <span v-else>Sign In</span>
          </button>
        </form>
      </div>
    </div>
  </div>
  <Toast ref="toast" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../plugins/axios'
import Toast from '../components/Toast.vue'
import { toastService } from '../services/toastService'

const router = useRouter()
const toast = ref(null)
const email = ref('')
const password = ref('')
const emailError = ref('')
const isLoading = ref(false)
let debounceTimer = null // Timer for debouncing

const validateEmail = () => {
  clearTimeout(debounceTimer) // Clear the previous timer
  debounceTimer = setTimeout(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value) {
      emailError.value = 'Email is required'
      toast.value?.show('Email is required', 'warning')
    } else if (!emailRegex.test(email.value)) {
      emailError.value = 'Please enter a valid email address'
      toast.value?.show('Please enter a valid email address', 'error')
    } else {
      emailError.value = ''
    }
  }, 800) // Debounce delay of 800ms
}

const handleLogin = async () => {
  if (!!emailError.value) {
    toast.value?.show(emailError.value, 'error')
    return
  }

  isLoading.value = true
  try {
    const response = await api.post('v1/auth/login', {
      email: email.value,
      password: password.value
    })
    
    localStorage.setItem('token', response.data.token)
    setTimeout(() => router.push('/'), 50)
  } catch (err) {
    console.error('Login failed:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  toastService.setInstance(toast.value)
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #0a0a0a, #1a1a1a);
  position: relative;
  overflow: hidden;
}

.page::before {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  background: 
    radial-gradient(circle at 15% 50%, #0066cc22 0%, transparent 25%),
    radial-gradient(circle at 85% 30%, #0066cc22 0%, transparent 25%);
  animation: backgroundMove 15s ease-in-out infinite;
}

.login-container {
  width: 100%;
  max-width: 420px;
  padding: 20px;
  position: relative;
  z-index: 1;
}

.login-box {
  background: rgba(45, 45, 45, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 0 15px rgba(0, 102, 204, 0.2);
  padding: 2.5rem;
  animation: boxAppear 0.6s ease-out;
  border: 1px solid #3d3d3d;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h1 {
  color: #ffffff;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 102, 204, 0.5);
}

.login-header p {
  color: #a0a0a0;
  font-size: 0.95rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(61, 61, 61, 0.8);
  border: 2px solid rgba(77, 77, 77, 0.8);
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #0066cc;
  background: rgba(69, 69, 69, 0.8);
  box-shadow: 0 0 15px rgba(0, 102, 204, 0.3);
}

.btn-primary {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #0066cc, #0052a3);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: rotate(45deg);
  animation: buttonShine 3s infinite;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0074e6, #0066cc);
  transform: translateY(-1px);
  box-shadow: 0 0 20px rgba(0, 102, 204, 0.4);
}

.input-error {
  border-color: #ff4444 !important;
}

.error-message {
  color: #ff4444;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
}

.spinner {
  animation: spin 1s linear infinite;
  margin-right: 8px;
}

@keyframes boxAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes buttonShine {
  0% {
    left: -50%;
  }
  100% {
    left: 150%;
  }
}

@keyframes backgroundMove {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-5%, 5%);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
