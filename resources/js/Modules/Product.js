import Product from '../Models/Product.js';
import axios from "axios";

const product = {
  namespaced: true,
  state() {
    return {
      selected: [],
      products: [],
    }
  },
  actions: {
    async loadProducts(state, context) {
      try {
        const products = await axios.get('/api/product');
        if (products.data) {
          this.commit('product/setProducts', products.data.map((product) => new Product({...product})));
        }
      }
      catch (error) {
        console.log(error);
      }
    },

    setSelected(state, payload){
      this.commit('product/setSelected', payload);
    }

  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelected(state, product) {
      state.selected = product;
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getSelected(state) {
      return state.selected;
    }
  },
}

export default product;