import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutUs from '../pages/AboutUs.vue'
import Service from '../pages/Service.vue'
import OurWork from '../pages/OurWork.vue'
import ContactUs from '../pages/ContactUs.vue'

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
