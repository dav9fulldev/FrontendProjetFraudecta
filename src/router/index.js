import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
//import Dashboard from '../views/Dashboard.vue'
import Verify from '../views/Verify.vue'
import History from '../views/History.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: 'dashboard' }, // Redirection vers /dashboard
      //{ path: 'dashboard', component: Dashboard },
      { path: 'verify', component: Verify },
      { path: 'history', component: History },
      { path: 'profile', component: Profile },
      { path: 'about', component: About },
      { path: 'logout', component: Logout },
    ],
  },
  {
    path: '/login',
    component: Login,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
