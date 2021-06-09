<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">

          <div class="md:col-span-2">
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
      description: 'Product Description...',
      category: 1,
      price: '78',
    },
    categories: [],
  }),

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
        console.log(this.categories);
      }
      catch(error) {
        console.log(error);
      }
    },

  },

  mounted() {
      console.log('Component mounted.')
      this.getCategories();
  },
  created() {
    console.log(this.route);
  }
  
}
</script>
