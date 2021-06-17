<template>
  <div>
    <div class="py-6 px-4 border-b">
      <h1 class="text-xl tracking-wide" to="/">Dashboard</h1>
    </div>
    <div class="spacer py-4"></div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

          <ProductsTable v-if="dashboard == 'products'" />
          <CategoriesTable v-if="dashboard == 'categories'"/>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Detail from './../Events/Detail.js';
import ProductsTable from './Table/ProductsTable';
import CategoriesTable from './Table/CategoriesTable';
export default {
  components : {
    ProductsTable,
    CategoriesTable
  },

  data : () => ({
    dashboard: 'products',
  }),

  mounted() {
    Detail.$on(['change'], (payload) => {
      console.log(payload);
      this.dashboard = payload;
    });
  }
}

</script>

<style scoped>
</style>
