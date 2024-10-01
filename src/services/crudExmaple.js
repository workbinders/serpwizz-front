import api from '@/services/http';

const userService = {
    // CREATE: Add a new user
    async createUser(userData) {
      try {
        const response = await api.post('/users', userData);
        return response.data;
      } catch (error) {
        handleServiceError(error);
      }
    },
  
    // READ: Get a list of users
    async getUsers(params = {}) {
      try {
        const response = await api.get('/users', { params });
        return response.data;
      } catch (error) {
        handleServiceError(error);
      }
    },
  
    // READ: Get a single user by ID
    async getUserById(userId) {
      try {
        const response = await api.get(`/users/${userId}`);
        return response.data;
      } catch (error) {
        handleServiceError(error);
      }
    },
  
    // UPDATE: Update a user's details
    async updateUser(userId, userData) {
      try {
        const response = await api.put(`/users/${userId}`, userData);
        return response.data;
      } catch (error) {
        handleServiceError(error);
      }
    },
  
    // DELETE: Remove a user
    async deleteUser(userId) {
      try {
        const response = await api.delete(`/users/${userId}`);
        return response.data;
      } catch (error) {
        handleServiceError(error);
      }
    },
  };
  
  // Helper function to handle errors and display meaningful messages
  function handleServiceError(error) {
    if (error.response) {
      console.error('Service error:', error.response.data.message || 'An error occurred');
      // Display error message to user (e.g., using a notification system)
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
  }
  
  export default userService;

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
