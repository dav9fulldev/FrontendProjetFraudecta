import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Verify from '../views/Verify.vue'
import History from '../views/History.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/verify', component: Verify },
  { path: '/history', component: History },
  { path: '/profile', component: Profile },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/logout', component: Logout },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
