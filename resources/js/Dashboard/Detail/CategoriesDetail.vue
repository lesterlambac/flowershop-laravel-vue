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
              <input type="text" v-model="category.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 focus:outline-none" placeholder="">
            </div>
          </div>
        </div>

        <!-- <div class="grid grid-cols-2 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label for="price" class="block text-sm font-medium text-gray-700">
              Price
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <input type="text" v-model="product.price" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 focus:outline-none" placeholder="">
            </div>
          </div>
        </div> -->

        <div class="px-4 py-3 bg-gray-50 sm:px-6">
          <button type="submit" @click.prevent="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Category from './../../Models/Category.js';
export default {

  props: {
    category: {
      type: Object,
      default: () => ({
        name: 'Category Name',
      }),
    },
  },

  data : () => ({
    categories: [],
  }),
}
</script>
