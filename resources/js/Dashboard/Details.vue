<template>
  <div class="md:col-span-2 px-4">
    <div class="py-6 border-b flex justify-between">
      <h1 class="text-xl tracking-wide text-white" to="/">Details</h1>
      <div class="cursor-pointer" @click="closeDetail">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 icon-close-circle"><circle cx="12" cy="12" r="10" class="primary text-gray-300 fill-current"></circle><path class="secondary text-gray-500" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path></svg>
      </div>
    </div>
    <div class="spacer py-4"></div>

    <div>
      <ProductsDetail :product="product" v-if="dashboard == 'products'" />
      <CategoriesDetail :category="category" v-if="dashboard == 'categories'"/>       
    </div>

  </div>
</template>

<script>
import ProductsDetail from './Detail/ProductsDetail';
import CategoriesDetail from './Detail/CategoriesDetail';

import Detail from './../Events/Detail.js';

export default {
  components : {
    ProductsDetail,
    CategoriesDetail
  },

  data : () => ({
    dashboard: 'products'
  }),

  props: ['product', 'category'],

  methods : {
    closeDetail() {
      this.$detail.close();
    }
  },

  mounted() {
    Detail.$on(['change'], (payload) => {
      this.dashboard = payload;
    });
  },
}

</script>
