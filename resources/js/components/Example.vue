<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

                  <div class="grid grid-cols-2 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="name" class="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" v-model="product.name" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-2 px-4" placeholder="">
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="content" class="block text-sm font-medium text-gray-700">
                        Content
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <textarea type="text" v-model="product.content" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-2 px-4" placeholder=""></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="price" class="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" v-model="product.price" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 py-2 px-4" placeholder="">
                      </div>
                    </div>
                  </div>

                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" @click.prevent="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>        
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data : () => ({
    product: {
      name: 'Product Name',
      content: 'Product Content...',
      price: '78',
    },
  }),

  methods: {
    submit() {
      axios.post('/api/product', {
        product: this.product,
      })
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e);
      });
    }
  },

  mounted() {
      console.log('Component mounted.')
  },
  created() {
    console.log(this.route);
  }
  
}
</script>
