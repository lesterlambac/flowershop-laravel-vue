<template>
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

              <select v-model="product.category" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 focus:outline-none">
                <option v-for="(category, index) in categories" :key="category.id + index" v-bind:value="category.id">{{ category.name }}</option>
              </select>

              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 py-3 bg-gray-50 sm:px-6 flex justify-between flex-wrap" v-if="product.id">
          <button type="submit" @click.prevent="submit" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded">
            Save
          </button>

          <span type="submit" @click.prevent="submit" class="text-gray-700 font-bold py-2 pl-8 rounded underline">
            Delete
          </span>
        </div>

        <div class="px-4 py-3 bg-gray-50 sm:px-6" v-else>
          <button type="submit" @click.prevent="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    categories: [],
  }),

  props: {
    product: {
      type: Object,
      default: function () {
        return { 
          name: 'Product Name',
          description: 'Product Description...',
          price: '78',
          category: 1,
         }
      }
    },
  },

  watch: {
    product(val) {
      console.log(typeof val.category);
      if (typeof val.category == 'object') {
        val.category = val.category.id;
      }
    } 
  },

  async mounted() {
    await this.$store.dispatch('category/loadCategories');
    this.categories = this.$store.getters['category/getCategories'];
  },

  created() {
    if (typeof this.product.category == 'object') {
      this.product.category = this.product.category.id;
    }
  }
}
</script>
