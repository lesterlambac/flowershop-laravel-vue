<template>
  <div class="md:col-span-2 px-4" v-if="open">
    <div class="py-6 border-b flex justify-between">
      <h1 class="text-xl tracking-wide" to="/">Details</h1>
      <div class="cursor-pointer" @click="closeDetail">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 icon-close-circle"><circle cx="12" cy="12" r="10" class="primary text-gray-300 fill-current"></circle><path class="secondary text-gray-500" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path></svg>
      </div>
    </div>
    <div class="spacer py-4"></div>
    <form action="#" method="POST">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

          <div class="grid grid-cols-2 gap-6">
            <div class="col-span-3 sm:col-span-2">
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <input type="text" v-model="product.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 focus:outline-none" placeholder="">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div class="col-span-3 sm:col-span-2">
              <label for="content" class="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <textarea type="text" v-model="product.description" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 focus:outline-none h-24" placeholder=""></textarea>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div class="col-span-3 sm:col-span-2">
              <label for="price" class="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <input type="text" v-model="product.price" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 focus:outline-none" placeholder="">
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div class="col-span-3 sm:col-span-2">
              <label for="price" class="block text-sm font-medium text-gray-700">
                Category
              </label>
              <div class="relative">
                <select v-model="product.category" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 focus:outline-none" id="grid-state" >
                  <option v-for="(category, index) in categories" :key="category.id + index" :value="category.id">{{ category.name }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>


          <div class="px-4 py-3 bg-gray-50 sm:px-6">
            <button type="submit" @click.prevent="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios';
import Detail from './../Events/Detail.js';
import Product from './../Models/Product.js';

export default {
  data : () => ({
    product: {
      name: 'Product Name',
      description: 'Product Description...',
      category: 1,
      price: '78',
    },
    categories: [],
    open: false,
  }),

  watch: {
    product(val) {
      if (typeof val.category == 'object') {
        val.category = val.category.id;
      }
    }
  },

  methods: {
    submit() {
      console.log(this.product);
      axios.post('/api/product', this.product)
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e);
      });
    },

    async getCategories() {
      try {
        const res = await axios.get('/api/category')
        this.categories = res.data;
      }
      catch(error) {
        console.log(error);
      }
    },

    async getSelectedProduct() {
      this.product = new Product(this.$store.getters['product/getSelected']);
      console.log(this.product);
    },

    async openDetail() {
      this.open = true;

      await this.getSelectedProduct();
    },

    closeDetail() {
      this.open = false;
    }

  },

  mounted() {
    // load categories ...
    this.getCategories();

    // event bus ...
    Detail.$on(['open'], (payload) => {
      this.openDetail(payload);
    });

    Detail.$on(['close'], (payload) => {
      this.openDetail(payload);
    });
  },
}
</script>
