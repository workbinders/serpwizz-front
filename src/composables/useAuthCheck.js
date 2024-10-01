import { ref } from 'vue'
// Stores
import { useUserStore } from '@/stores/user'

export function useAuthCheck() {
  const isAuthenticated = ref(false)
  const loading = ref(true)

  const checkTokenValidity = async () => {
    try {
      const { profile } = useUserStore()
      await profile()
    } catch (err) {
      isAuthenticated.value = false
    } finally {
      loading.value = false
    }
  }

  return {
    isAuthenticated,
    loading,
    checkTokenValidity
  }
}
