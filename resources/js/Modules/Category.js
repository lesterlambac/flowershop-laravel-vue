import Category from '../Models/Category.js';
import axios from "axios";

const category = {
  namespaced: true,
  state() {
    return {
      selected: [],
      categories: [],
    }
  },
  actions: {
    async loadCategories(state, context) {
      try {
        const categories = await axios.get('/api/category');
        if (categories.data) {
          const filtered = categories.data.map((category) => new Category({...category}));
          this.commit('category/setCategories', filtered);
        }
      }
      catch (error) {
        console.log(error);
      }
    },

    setSelected(state, context){
      this.commit('category/setSelected', context);
    }

  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setSelected(state, category) {
      state.selected = category;
    }
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getSelected(state) {
      return state.selected;
    }
  },
}

export default category;