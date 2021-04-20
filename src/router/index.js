/*
 * @Descripttion:
 * @Author: jinhua
 * @Date: 2020-09-10 21:50:45
 * @LastEditors: jinhua
 * @LastEditTime: 2020-09-12 10:11:23
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
