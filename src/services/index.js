import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL
})
api.defaults.headers.common['accept'] = 'application/json'
export default api
