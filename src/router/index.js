import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contactUs',
      name: 'contact',
      component: () => import ('../views/ContactUsView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/commercial',
      name: 'commercial',
      component: () => import ('../components/Commercial.vue')
    },
    {
      path:'/residential',
      name:'residential',
      component: () => import('../components/Residential.vue')
    }
  ]
})

export default router
