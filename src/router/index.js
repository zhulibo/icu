import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: '/home' },
    },
    {
      name: 'home',
      path: '/home',
      meta: {
        title: 'home',
      },
      component: () => import('@/views/home/home.vue'),
    },
    {
      name: 'mutant',
      path: '/mutant',
      meta: {
        title: 'mutant',
      },
      component: () => import('@/views/mutant/mutant.vue'),
    },
    {
      name: 'human',
      path: '/human',
      meta: {
        title: 'human',
      },
      component: () => import('@/views/human/human.vue'),
    },
    {
      name: 'equipment',
      path: '/equipment',
      meta: {
        title: 'equipment',
      },
      component: () => import('@/views/equipment/equipment.vue'),
    },
    {
      name: 'map',
      path: '/map',
      meta: {
        title: 'map',
      },
      component: () => import('@/views/map/map.vue'),
    },
  ]
})

export default router
