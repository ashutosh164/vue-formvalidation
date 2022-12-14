import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormPage from '@/components/FormPage.vue'
import Jobs from '@/components/Jobs.vue'
import JobsDetails from '@/components/JobDetails.vue'
import NotFound from '@/components/NotPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: FormPage
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: JobsDetails,
    props: true
  },

  //redirect 

  {
    path: '/all-jobs',
    redirect: '/jobs',
  },

  // page not found

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
