import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import i18n from '@/i18n';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      icon: 'mdi-home',
      title: 'routes.home.title',
      requiresAuth: false,
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    document.title = '404 - Page Not Found';
    next('/404');
  } else {
    if (to.meta && to.meta.title) {
      document.title = i18n.global.t(to.meta.title);
    }
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
      next('/login');
    } else if (to.meta.group === 'auth' && auth.isAuthenticated) {
      next('/');
    } else {
      next();
    }
  }
});


export default router
