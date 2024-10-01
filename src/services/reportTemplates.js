import { ref } from 'vue'
import api from '@/services/http'

const loading = ref(false)

export default {
  async store(form) {
    if (loading.value === false) {
      loading.value = true
      try {
        return await api.post('report-templates', form)
      } catch (error) {
        console.log(error)

        api.handleServiceError(error)
      } finally {
        loading.value = false
      }
    }
  },
  async get() {
    if (loading.value === false) {
      loading.value = true
      try {
        return await api.get('report-templates')
      } catch (error) {
        api.handleServiceError(error)
      } finally {
        loading.value = false
      }
    }
  }
}
