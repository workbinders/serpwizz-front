import axios from 'axios'
import http from './http'
import { useUserStore } from '@/stores/user'
import { getItem } from '@/utils/localStorageUtil'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL
})
api.defaults.headers.common['accept'] = 'application/json'

// Request interceptor to attach token to requests
api.interceptors.request.use(
  (config) => {
    const token = getItem('TOKEN')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const { removeUser } = useUserStore()
    if (error.response && error.response.status == http.AUTH_ERROR_CODE) {
      removeUser()
      router.push({ name: 'Login' })
    }
    return Promise.reject(error)
  }
)

export default api
