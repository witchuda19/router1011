import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewCard from '../components/NewCard.vue'

// import Nightcafe1 from '../components/Nightcafe1.vue';

import Nightcafe1_1 from '../components/Nightcafe1.vue';
import Nightcafe2_2 from '../components/Nightcafe2.vue';
import Nightcafe3_3 from '../components/Nightcafe3.vue';
import Nightcafe4_4 from '../components/Nightcafe4.vue';
import Nightcafe5_5 from '../components/Nightcafe5.vue';
import Nightcafe6_6 from '../components/Nightcafe6.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'allnews',
      component: NewCard
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
      path: '/review',
      name: 'review',
      component: () => import('../views/Review.vue')
    },
    {
      path: '/CafeNi',
      name: 'CafeNi',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CafeNi.vue')
    },
    {
      path: '/Nightcafe/1',
      name: 'Nightcafe1',
      component: Nightcafe1_1,
      props: true
    },
    {
      path: '/Nightcafe/2',
      name: 'Nightcafe2',
      component: Nightcafe2_2,
      props: true
    },
    {
      path: '/Nightcafe/3',
      name: 'Nightcafe3',
      component: Nightcafe3_3,
      props: true
    },
    {
      path: '/Nightcafe/4',
      name: 'Nightcafe4',
      component: Nightcafe4_4,
      props: true
    },
    {
      path: '/Nightcafe/5',
      name: 'Nightcafe5',
      component: Nightcafe5_5,
      props: true
    },
    {
      path: '/Nightcafe/6',
      name: 'Nightcafe6',
      component: Nightcafe6_6,
      props: true
    }


  ]

})

export default router