import { createRouter, createWebHistory } from 'vue-router'
// import Home from './components/Home.vue';
// import User from './components/User.vue';
// import Categories from './components/Categories.vue';
// import Products from './components/Products.vue';
import Helper from '../public/view/Helper.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  // {
  //   path: '/',
  //   name: 'User',
  //   component: user
  // },
  // {
  //   path: '/',
  //   name: 'Categories',
  //   component: categories
  // },
  // {
  //   path: '/',
  //   name: 'Products',
  //   component: products
  // },
  {
    path: '/help',
    name: 'Help',
    component: Helper
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

export default router
