<template>
    <div class="container">
      <div class="container">

        <header class="relative py-6 px-8 flex align-center justify-between shadow-sm" style="background: rgba(255,255,255, 0.8)">
          <div class="">
            <router-link class="font-bold text-xl tracking-wide text-pink-700 hover:no-underline no-underline" to="/">🌸 BloomFields</router-link>
          </div>
          <nav class="">
            <router-link class="pl-6 font-semibold leading-tight tracking-wide hover:no-underline no-underline text-gray-700" to="/products">Products</router-link>
            <router-link class="pl-12 font-semibold leading-tight tracking-wide hover:no-underline no-underline text-gray-700" to="/">Location</router-link>
          </nav>

        </header>
        <div class="relative pb-48 overflow-hidden" style="height: 400px;">
          <img class="absolute inset-0 h-full w-full object-cover" style="z-index: -1" :src="'image/bloomfields.jpg'" alt="">
        </div>
        <div class="mb-12 text-white px-8 py-3 text-sm text-center font-bold shadow-md rounded-b" style="background: rgb(190 24 93);">
          <p>FREE Delivery within Digos City</p>
        </div>
      </div>

      <div class="grid grid-cols-10 gap-8 container">

          <div class="col-span-2">
            <div v-for="(category, index) in categories" :key="category.id + index">
              <button class="px-3 py-3 mb-2 border-b rounded-sm shadow-md border font-semibold cursor-pointer block w-full text-left" @click="changeCategory(category.id)">
                🌷 {{ category.name }}
              </button>
            </div>
          </div>

          <div class="col-span-8">
            <div class="grid grid-cols-3" >

              <div class="px-2" v-for="(product, index) in products" :key="product + index">

                <div class="container mx-auto w-full">
                  <div class="flex flex-wrap -mx-4">
                    <a href="" class="c-card block bg-white shadow-md hover:shadow-xl border rounded-lg overflow-hidden w-full hover:no-underline hover:text-black">
                      <div class="relative pb-48 overflow-hidden border-b">
                        <img
                          class="absolute inset-0 h-full w-full object-cover"
                          :src="'image/bloomfields.jpg'"
                          alt=""
                        />
                      </div>
                      <div class="p-4">
                        <span class="inline-block px-2 py-1 leading-none bg-yellow-200 text-yellow-600 rounded-full font-semibold uppercase tracking-wide text-xs">
                          {{ product.getCategory() }}
                        </span>

                        <h2 class="mt-2 mb-2 font-bold">
                          {{ product.name }}
                        </h2>

                        <p class="text-sm">
                          {{ product.description }}
                        </p>

                        <div class="mt-3 flex items-center">
                          <span class="text-sm font-semibold">PHP</span>&nbsp;<span
                            class="font-bold text-xl"
                            >{{ product.price }}</span>
                        </div>

                      </div>
                      <!-- <div class="p-4 border-t border-b text-xs text-gray-700">
                        <span class="flex items-center mb-1">
                          <i class="far fa-clock fa-fw mr-2 text-gray-900"></i>
                            3 Tage
                        </span>
                        <span class="flex items-center">
                          <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                          Ermäßigung mit Karte
                        </span>
                      </div> -->
                      <div class="p-4 flex items-center text-sm text-gray-600 border-t">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 fill-current text-yellow-500"
                        >
                          <path
                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                          ></path></svg
                        ><svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 fill-current text-yellow-500"
                        >
                          <path
                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                          ></path></svg
                        ><svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 fill-current text-yellow-500"
                        >
                          <path
                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                          ></path></svg
                        ><svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 fill-current text-yellow-500"
                        >
                          <path
                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                          ></path></svg
                        ><svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 fill-current text-gray-400"
                        >
                          <path
                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                          ></path></svg
                        ><span class="ml-2">34 Orders</span>
                      </div>
                    </a>

                  </div>
                </div>

              </div>

            </div>
          </div>

      </div>
    </div>
</template>

<script>
  import Product from '../Models/Product.js';
  export default {
    data : () => ({
      categories: [],
      products: [],
    }),

    methods: {
      async changeCategory(id) {
        try {
          const res = await axios.get(`/api/category/${id}`);
          if (res.data) {
            this.products = [];
          }
          this.products = res.data.products.map((product) => new Product({...product, category: res.data.category}));
          console.log(this.products);
        }
        catch(error) {
          console.log(error);
        }
      },

      async getCategories() {
        try {
          const res = await axios.get('/api/category')
          this.categories = res.data;
          console.log(this.categories);
        }
        catch(error) {
          console.log(error);
        }
      },

      async getProducts() {
        try {
          const res = await axios.get('/api/product');
          if(res.data) {
            this.products = res.data.map((product) => new Product(product));
          }
          console.log(this.products);
        }
        catch (error) {
          console.log(error);
        }
      }
    },

    filters: {
      readMore(text, length, suffix) {
        if (text.length <= length) {
          return text;
        }
        return text.substring(0, length) + suffix;
      }
    },

    async mounted() {
      console.log('Component mounted.');
      console.log(this.getCategories());
      console.log(this.getProducts());
    },
  }
</script>
