import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

import auth from './Modules/Auth';
import product from './Modules/Product';

const store = new VueX.Store({
  modules: {
    auth,
    product,
  }
});

export default store;