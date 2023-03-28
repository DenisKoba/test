import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Packages',
    component: () => import('@/pages/packages/Packages.vue'),
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
