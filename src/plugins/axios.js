import axios from 'axios'
import { handleErrorMessage, handleSuccessMessage } from '../modules/utils'

const API_CONFIG = {
  BASE_URL: 'http://localhost:8005',
  TIMEOUT: 10000
}

// Create axios instance with custom config
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL+'/api',
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Request interceptor
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  response => {
    if (response.data?.message) {
      handleSuccessMessage(response.data.message)
    }
    return response
  },
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    handleErrorMessage(error)
    return Promise.reject(error)
  }
)

export default api
