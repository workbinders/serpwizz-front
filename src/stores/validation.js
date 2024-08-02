import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useValidationStore = defineStore('validation', () => {
  const errors = ref(null)

  const setErrors = (errorMessages) => {
    errors.value = errorMessages
  }

  return { errors, setErrors }
})
