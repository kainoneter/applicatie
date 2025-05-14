import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue';
import i18n from '@/i18n';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      icon: 'mdi-home',
      title: 'home.title',
    }
  },
  {
    path: '/categories',
    name: 'categories',
    children: [
      {
        path: 'test1',
        name: 'test1',
        component: Home,
        meta: {
          title: 'test1.title'
        }
      },
      {
        path: 'test2',
        name: 'test2',
        component: Home,
        meta: {
          title: 'test2.title'
        }
      },
    ],
    meta: {
      icon: 'mdi-view-grid',
      title: 'categories.title',
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Home,
    meta: {
      title: 'cart.title',
      icon: 'mdi-cart'

    }
  },
  {
    path: '/404',
    component: NotFound,
    meta: {
      show: false,
      title: '404.title'
    }
  }
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
