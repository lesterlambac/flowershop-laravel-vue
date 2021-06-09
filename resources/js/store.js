import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

import auth from './Modules/Auth';

const store = new VueX.Store({
  modules: {
    auth,
  }
});

export default store;