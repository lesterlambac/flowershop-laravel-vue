require('./bootstrap');

import Vue from 'vue';
import router from './router.js';
import store from './store.js';

import HeaderVue from './components/HeaderVue';
import FooterVue from './components/FooterVue';

import Detail from './Events/app.js';
Vue.use(Detail);

const app = new Vue({
  el: '#app',
  components: {
    HeaderVue,
    FooterVue,
  },
  router,
  store,
});
