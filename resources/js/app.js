require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes.js';
import store from './store.js';

import HeaderVue from './components/HeaderVue';
import FooterVue from './components/FooterVue';

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes,
});

const app = new Vue({
  el: '#app',
  components: {
    HeaderVue,
    FooterVue,
  },
  router,
  store,
});
