import Vue from 'vue';
import VueX from 'vuex';

Vue.use(VueX);

import auth from './Modules/Auth';
import product from './Modules/Product';
import category from './Modules/Category';

const store = new VueX.Store({

  state() {
    return {
      selected: 'products',
    }
  },

  mutations: {
    setSelected(state, payload) {
      state.selected = payload;
    }
  },

  getters: {
    getSelected(state) {
      return state.selected;
    }
  },

  modules: {
    auth,
    product,
    category,
  }
});

export default store;