import { ref } from 'vue'
import api from '@/services/http'

const loading = ref(false)
const baseURL = 'tools/'
export default {
  async get(form, url) {
    if (loading.value === false) {
      loading.value = true
      try {
        return await api.post(baseURL + url, form)
      } catch (error) {
        api.handleServiceError(error)
      } finally {
        loading.value = false
      }
    }
  }
}
