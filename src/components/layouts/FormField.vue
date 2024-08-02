<template>
  <div>
    <slot></slot>
    <ErrorMessage :name="name" />
    <span role="alert" v-if="errors && errors[name]">{{ errors[name][0] }}</span>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { ErrorMessage } from 'vee-validate'
import { useValidationStore } from '@/stores/validation'

const { errors } = storeToRefs(useValidationStore())

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
