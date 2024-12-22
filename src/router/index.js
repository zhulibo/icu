import { createRouter, createWebHistory } from 'vue-router'

const BaseRoutes = [
  {
    path: '/',
    redirect: { path: '/home' },
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: 'home',
      isNav: true,
    },
    component: () => import('@/views/home/home.vue'),
  },
  {
    name: 'equipment',
    path: '/equipment',
    meta: {
      title: 'equipment',
      isNav: true,
    },
    component: () => import('@/views/equipment/equipment.vue'),
  },
  {
    name: 'mutant',
    path: '/mutant',
    meta: {
      title: 'mutant',
      isNav: true,
    },
    component: () => import('@/views/mutant/mutant.vue'),
  },
  {
    name: 'human',
    path: '/human',
    meta: {
      title: 'human',
      isNav: true,
    },
    component: () => import('@/views/human/human.vue'),
  },
  {
    name: 'map',
    path: '/map',
    meta: {
      title: 'map',
      isNav: true,
    },
    component: () => import('@/views/map/map.vue'),
  },
  {
    name: 'privacy',
    path: '/privacy',
    meta: {
      title: 'privacy',
      isNav: true,
    },
    component: () => import('@/views/privacy/privacy.vue'),
  },
  {
    name: 'game',
    path: '/game',
    meta: {
      title: 'game',
      isNav: true,
    },
    component: () => import('@/views/game/game.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: BaseRoutes
})

export default router

export {
  BaseRoutes
}
