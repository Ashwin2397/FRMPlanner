import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import DashboardPage from './pages/DashboardPage.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: DashboardPage
    }
  ]
})
