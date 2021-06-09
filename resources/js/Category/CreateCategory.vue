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
                        <input type="text" v-model="category.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700" placeholder="">
                      </div>
                    </div>
                  </div>

                  <div class="px-4 py-3 bg-gray-50 sm:px-6">
                    <button type="submit" @click.prevent="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      Create
                    </button>
                  </div>
                  
                  <div v-if="categories.length">
                    <span class="block text-sm font-medium text-gray-700">
                      Categories
                    </span>
                    <div class="flex items-center justify-between px-3 py-3 bg-gray-50 sm:px-6 border-b mb-1" v-for="(category, index) in categories" :key="category.id + index">
                      <span class="block text-sm font-medium text-gray-700">
                        {{ category.name }}
                      </span>
                      <span class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700 cursor-pointer"
                        @click="deleteCategory({
                          categoryId: category.id,
                          location: index,
                        })">
                        ❌
                      </span>
                    </div>
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
    category: {
      name: 'Category Name',
    },
    categories: [],
  }),

  methods: {
    async submit() {
      try {
        const res = await axios.post('/api/category', {
          name: this.category.name,
        })
        console.log(res);

        if (res) {
          await this.getCategories();
        }
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

    async deleteCategory({categoryId, location}) {
      try {
        const res = await axios.delete(`/api/category/${categoryId}`);
        if (res) {
          this.categories.splice(location, 1);
        }
      }
      catch(error) {
        console.log(error);
      }
    }
  },

  mounted() {
    this.getCategories();
  }
}
</script>
