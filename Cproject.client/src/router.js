import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: loadPage('DashboardPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/projects',
    name: 'Projects',
    component: loadPage('ProjectsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/billings',
    name: 'Billings',
    component: loadPage('BillingsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/teams',
    name: 'Teams',
    component: loadPage('TeamsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/stats',
    name: 'Stats',
    component: loadPage('StatsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/settings',
    name: 'Settings',
    component: loadPage('SettingsPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
