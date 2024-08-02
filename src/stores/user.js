import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/services/http'
import { useValidationStore } from '@/stores/validation'

export const useUserStore = defineStore('user', () => {
  const { setErrors } = useValidationStore()

  const user = ref(null)
  const loading = ref(false)

  const register = async (form) => {
    if (loading.value === false) {
      loading.value = true
      try {
        return await api.post('register', form)
      } catch (error) {
        if (error.response.status == api.VALIDATION_ERROR_CODE) {
          setErrors(error.response.data.errors)
        }
        return error
      } finally {
        loading.value = false
      }
    }
  }

  const login = async (form) => {
    if (loading.value === false) {
      loading.value = true
      try {
        return await api.post('login', form)
      } catch (error) {
        if (error.response.status == api.VALIDATION_ERROR_CODE) {
          setErrors(error.response.data.errors)
        }
        return error
      } finally {
        loading.value = false
      }
    }
  }

  return { user, register, login }
})
