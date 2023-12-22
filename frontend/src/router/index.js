import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/entrance',
    name: 'entrance',
    component: () => import('../views/EntrancePage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegistrationPage.vue')
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: () => import('../views/EquipmentPage.vue')
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/PeoplePage.vue')
  },
  {
    path: '/space',
    name: 'space',
    component: () => import('../views/SpacePage.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfilePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
