import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './public'
import privateRoutes from './private'

const routes = publicRoutes.concat(privateRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title + ' - ' + import.meta.env.VITE_APP_NAME
  }
  next()
})

export default router
