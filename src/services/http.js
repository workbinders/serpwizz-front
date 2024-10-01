import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import API from '@/services/index'
import { useValidationStore } from '../stores/validation'

const toastId = ref('')
const notify = (message) =>
  (toastId.value = toast(message, {
    autoClose: false,
    position: toast.POSITION.BOTTOM_CENTER,
    transition: 'slide',
    isLoading: true,
    closeButton: false
  }))

const updateNotify = (message, type = 'error') =>
  toast.update(toastId.value, {
    render: message,
    autoClose: 5000,
    closeButton: true,
    isLoading: false,
    type: type
  })

const dismissNotify = () => toast.clearAll()

export default {
  get(url) {
    return new Promise((resolve, reject) => {
      API.get(url)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  post(url, data, header = {}) {
    return new Promise(async (resolve, reject) => {
      const { setErrors } = useValidationStore()
      setErrors(null)
      notify('Please wait...')
      API.post(url, data, { headers: header })
        .then((response) => {
          if (response?.data?.message) {
            updateNotify(response?.data?.message, 'success')
          } else {
            dismissNotify()
          }
          resolve(response.data)
        })
        .catch((error) => {
          updateNotify(error?.response?.data?.message)
          reject(error)
        })
    })
  },
  patch(url, data) {
    return new Promise((resolve, reject) => {
      API.patch(url, data)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  delete(url, data) {
    return new Promise((resolve, reject) => {
      API.delete(url, data)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  handleError(error) {
    const { setErrors } = useValidationStore()
    if (error.response.status == VALIDATION_ERROR_CODE) {
      setErrors(error.response.data.errors)
    }
  },
  VALIDATION_ERROR_CODE: 422,
  AUTH_ERROR_CODE: 401
}
