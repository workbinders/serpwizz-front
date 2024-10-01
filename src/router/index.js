import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './public'
import privateRoutes from './private'
import { useUserStore } from '@/stores/user'

const routes = publicRoutes.concat(privateRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title + ' - ' + import.meta.env.VITE_APP_NAME
  }

  const userStore = useUserStore()

  if (to.matched.some((route) => route.meta.requiresAuth)) {
    try {
      const user = await userStore.getUser
      if (user && user != null) {
        next()
      } else {
        next({ name: 'Login' })
      }
    } catch (error) {
      console.log(error)
      next({ name: 'Login' })
    }
  } else if (to.matched.some((route) => route.meta.onlyGuest)) {
    try {
      if ((await userStore.getUser) != null) {
        next({ name: 'Dashboard' })
      } else {
        next()
      }
    } catch (error) {
      console.log(error)
      next({ name: 'Dashboard' })
    }
  } else {
    next()
  }
})

export default router
