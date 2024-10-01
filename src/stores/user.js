import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/services/http'
import { setItem, getItem, removeItem } from '@/utils/localStorageUtil'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const token = ref(null)
  const loading = ref(false)

  const register = async (form) => {
    if (loading.value === false) {
      loading.value = true
      try {
        return await api.post('register', form)
      } catch (error) {
        api.handleError(error)
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
        const response = await api.post('login', form)
        if (response.status == true && response.data?.user && response.data?.token) {
          setUser(response.data.user, response.data.token)
        }
        return response
      } catch (error) {
        api.handleError(error)
        return error
      } finally {
        loading.value = false
      }
    }
  }

  const profile = async (form) => {
    if (loading.value === false) {
      loading.value = true
      try {
        const response = await api.get('auth-user/0')
        if (response.status == true && response.data?.user) {
          setUser(response.data.user)
        }
        return response
      } catch (error) {
        api.handleError(error)
        return error
      } finally {
        loading.value = false
      }
    }
  }

  const logout = async () => {
    if (loading.value === false) {
      loading.value = true
      try {
        const response = await api.post('logout')
        if (response.status == true) {
          removeUser()
        }
        return response
      } catch (error) {
        api.handleError(error)
        return error
      } finally {
        loading.value = false
      }
    }
  }

  const loadLocalData = async () => {
    const localUser = getItem('USER', null)
    const localToken = getItem('TOKEN', null)
    user.value = localUser
    token.value = localToken
  }

  const setUser = async (userData, tokenData = null) => {
    if (userData && tokenData) {
      user.value = userData
      setItem('USER', userData)
    }
    if (tokenData != null) {
      token.value = tokenData
      setItem('TOKEN', tokenData)
    }
  }

  const removeUser = async () => {
    user.value = null
    token.value = null
    removeItem('USER')
    removeItem('TOKEN')
  }

  const getUser = computed(async () => {
    if (user.value == null) {
      await loadLocalData()
    }
    return user.value
  })

  const getToken = computed(async () => {
    if (token.value == null) {
      await loadLocalData()
    }
    return user.value
  })

  return { user, token, register, login, profile, logout, getUser, getToken, removeUser }
})
