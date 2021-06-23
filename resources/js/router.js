import Vue from 'vue';
import store from './store.js';

import Home from './components/Home.vue';
import Login from './Auth/Login';

import Products from './Product/Products';
import CreateProduct from './Product/CreateProduct';

import CreateCategory from './Category/CreateCategory';
import Main from './Dashboard/Main';

import VueRouter from 'vue-router';
import { tsParameterProperty } from '@babel/types';
Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Main,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/category',
    component: CreateCategory,
  },
  {
    path: '/create-product',
    component: CreateProduct,
  },
  {
    path: '/products',
    component: Products,
  },
];


const router = new VueRouter({
  // mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuth && to.name == 'Login') {
      next('/admin');
    } else if(!store.getters.isAuth && to.name !== 'Login') {
      next('/login');
    } else {
      next();
      return;
    }
  } else {
    next();
    return;
  }
});

export default router;
