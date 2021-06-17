<template>
  <div class="grid grid-cols-12 h-screen">

    <div class="col-span-2 bg-white-100 border-r">
      <Sidebar />
    </div>

    <div class="col-span-7" :class="[ !open ? 'col-span-10' : '']">
      <Dashboard/>
    </div>

    <div class="col-span-3 bg-gray-700" v-show="open" >
      <Details :product="product" :category="category" />
    </div>

    <AddNew @addNew="addNew" />

  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Details from './Details';

import Detail from './../Events/Detail.js';
import Product from './../Models/Product.js';
import Category from './../Models/Category.js';

import AddNew from './../Blocks/AddNew';

export default {
  components: {
    Sidebar,
    Dashboard,
    Details,
    AddNew,
  },

  data : () => ({
    open: false,
    dashboard: 'products',
    product: {},
    category: {},
    categories: [],
  }),

  methods: {
    async openDetail() {
      this.open = true;

      if (this.dashboard == 'products') {
        this.product = new Product(this.$store.getters['product/getSelected']);
      }

      if (this.dashboard == 'categories') {
        this.category = new Category(this.$store.getters['category/getSelected']);
      }

    },

    addNew(payload) {
      console.log(payload);
      if (payload == 'products') {
        this.product = {};
      }

      if (payload == 'categories') {
        this.category = {};
      }
    },

    closeDetail() {
      this.open = false;
    }
  },

  mounted() {
    // event bus ...
    Detail.$on(['open'], async (payload) => {
      this.openDetail(payload);
    });

    Detail.$on(['close'], (payload) => {
      this.closeDetail(payload);
    });

    Detail.$on(['change'], (payload) => {
      this.dashboard = payload;
    });
  }
}
</script>

<style scoped>
</style>
