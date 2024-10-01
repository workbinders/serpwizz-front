<template>
  <div v-if="loading">Checking authentication...</div>
  <RouterView v-else />
</template>
<script setup>
import { onMounted } from 'vue'
import { useAuthCheck } from '@/composables/useAuthCheck'

const { checkTokenValidity, loading } = useAuthCheck()

onMounted(() => {
  checkTokenValidity()
})
</script>
