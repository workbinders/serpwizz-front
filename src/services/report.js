import api from '@/services/http'
const URL = '/report/lead'
const reportService = {
  async index(id) {
    try {
      const response = await api.get(`${URL}/${id}`)
      return response.data
    } catch (error) {
      handleServiceError(error)
    }
  }
}

// Helper function to handle errors and display meaningful messages
function handleServiceError(error) {
  if (error.response) {
    console.error('Service error:', error.response.data.message || 'An error occurred')
    // Display error message to user (e.g., using a notification system)
  } else if (error.request) {
    console.error('No response received:', error.request)
  } else {
    console.error('Error setting up request:', error.message)
  }
}

export default reportService

// import { ref } from 'vue'
// import { defineStore } from 'pinia'
// import { useValidationStore } from '@/stores/validation'

// export const useReportTemplates = defineStore('report_templates', () => {
//   const { setErrors } = useValidationStore()

//   const reportTemplate = ref(null)
//   const loading = ref(false)

//   const store = async (form) => {
//     if (loading.value === false) {
//       loading.value = true
//       try {
//         return await api.post('report-templates', form)
//       } catch (error) {
//         if (error.response.status == api.VALIDATION_ERROR_CODE) {
//           setErrors(error.response.data.errors)
//         }
//         return error
//       } finally {
//         loading.value = false
//       }
//     }

//     const get = async (form) => {
//         if (loading.value === false) {
//           loading.value = true
//           try {
//             return await api.get('report-templates')
//           } catch (error) {
//             if (error.response.status == api.VALIDATION_ERROR_CODE) {
//               setErrors(error.response.data.errors)
//             }
//             return error
//           } finally {
//             loading.value = false
//           }
//         }
//   }

//   //   const getUser = computed(async () => {
//   //     if (user.value == null) {
//   //       await loadLocalData()
//   //     }
//   //     return user.value
//   //   })

//   return { loading, reportTemplate, store, get }
// })
