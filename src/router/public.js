import Register from '@/views/public/Register.vue'
import Login from '@/views/public/Login.vue'
export default [
  {
    path: '/',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  }
]
