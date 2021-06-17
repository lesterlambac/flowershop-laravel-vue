import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

import auth from './Modules/Auth';
import product from './Modules/Product';
import category from './Modules/Category';

const store = new VueX.Store({

  state() {
    return {
      selected:'',
    }
  },

  mutation: {
    setSelected(state, payload) {
      state.selected = payload;
    }
  },

  modules: {
    auth,
    product,
    category,
  }
});

export default store;