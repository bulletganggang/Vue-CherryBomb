import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('@/views/categories/CategoriesPage.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact/ContactPage.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/user/UserPage.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Error',
      component: () => import('@/views/error/index.vue')
    }
  ],
  scrollBehavior(to, from) {
    if (to.path === from.path) {
      // 如果是导航到当前路由，滚动到顶部
      return { left: 0, top: 0, behavior: 'smooth' }
    }
  }
})

export default router
