import { createRouter, createWebHistory } from 'vue-router'

// Route-level Code Splitting / Lazy Loading
const HomePage = () => import('../pages/HomePage.vue')
const AboutUs = () => import('../pages/AboutUs.vue')
const Service = () => import('../pages/Service.vue')
const OurWork = () => import('../pages/OurWork.vue')
const ContactUs = () => import('../pages/ContactUs.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/services',
    name: 'Service',
    component: Service,
  },
  {
    path: '/our-work',
    alias: '/portfolio',
    name: 'OurWork',
    component: OurWork,
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
