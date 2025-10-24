import { createRouter, createWebHistory } from 'vue-router'
import AdminHome from '@/views/admin/AdminHome.vue'
import NotFound from '@/views/shared/NotFound.vue';
import i18n from '@/plugins/i18n';
import AdminLayout from '@/views/layouts/AdminLayout.vue';
import DefaultLayout from '@/views/layouts/DefaultLayout.vue';
import Home from '@/views/Home.vue';

const routes = [
   {
    path: '/',
    component: DefaultLayout,
    redirect: '/home',
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/not-found',
        name: '404',
        component: NotFound,
        meta: {
          hide: true,
        }
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: AdminHome,
        meta: {
          icon: 'mdi-home',
        }
      },
      {
        path: '/not-found',
        name: '404',
        component: NotFound,
        meta: {
          hide: true,
        }
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/not-found');
  } else {
    if (to.name) {
      document.title = i18n.global.t(`${to.name}.title`);
    }

    next();
    
    // if (to.meta.requiresAuth && !auth.isAuthenticated) {
    //   next('/login');
    // } else if (to.meta.group === 'auth' && auth.isAuthenticated) {
    //   next('/');
    // } else {
    //   next();
    // }
  } 
});


export default router
