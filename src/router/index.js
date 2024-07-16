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
      component: () => import('@/views/home/HomePage.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/categories',
      component: () => import('@/views/categories/CategoriesPage.vue')
    },
    {
      path: '/contact',
      component: () => import('@/views/contact/ContactPage.vue')
    },
    {
      path: '/search',
      component: () => import('@/views/search/SearchPage.vue')
    },
    {
      path: '/user',
      component: () => import('@/views/user/UserPage.vue')
    }
  ]
})

export default router
