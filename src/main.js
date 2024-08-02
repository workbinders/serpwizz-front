import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Form, Field } from 'vee-validate'

import App from './App.vue'
import router from './router'

import FormField from '@/components/layouts/FormField.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Form', Form)
app.component('Field', Field)
app.component('FormField', FormField)

app.provide('APP_URL', import.meta.env.VITE_APP_APP_URL)

app.mount('#app')
