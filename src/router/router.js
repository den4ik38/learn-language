import { createRouter, createWebHistory } from "vue-router"
import Main from '@/pages/Main'
import LearnPage from '@/pages/LearnPage'
import TestPage from '@/pages/TestPage'
import Admin from '@/pages/Admin'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Instruction from '@/pages/Instruction'
import UserPage from '@/pages/UserPage'
import TeacherRoom from '@/pages/TeacherRoom'





const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/learn-page',
    component: LearnPage
  },
  {
    path: '/test-page',
    component: TestPage
  },
  {
    path: '/admin',
    component: Admin
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/how-to-use',
    component: Instruction
  },
  {
    path: '/user-page',
    component: UserPage
  },
  {
    path: '/teacher-room',
    component: TeacherRoom
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  }
})

export default router;