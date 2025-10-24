import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/admin/Home.vue'
import NotFound from '@/views/NotFound.vue';
import i18n from '@/i18n';
import AdminLayout from '@/views/layouts/AdminLayout.vue';
import DefaultLayout from '@/views/layouts/DefaultLayout.vue';

const routes = [
   {
    path: '/',
    component: DefaultLayout,
    redirect: '/home',
    children: [
      {
        path: '/404',
        name: '404',
        component: NotFound,
      },
      {
        path: '/404',
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
        component: Home,
        meta: {
          icon: 'mdi-home',
        }
      },
      {
        path: '/404',
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
    next('/404');
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
