import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/index',
    component: () => import ('../pages/index.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router