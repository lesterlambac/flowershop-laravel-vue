<template>
  <div>
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody v-if="products.length" class="bg-white divide-y divide-gray-200">
          <tr v-for="(product) in products" :key="product.id" @click="setSelected(product)" class="cursor-pointer hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full object-cover" :src="'image/bloomfields.jpg'" alt="">
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ product.name }}
                  </div>
                  <div class="text-sm text-gray-500">
                    
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 ">
              <div class="text-sm text-gray-900">{{ product.description }}</div>
              <div class="text-sm text-gray-500"></div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {{ product.price }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ product.getCategory() }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900 group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 mr-4 icon-trash"><path class="group-hover:text-blue-400 text-gray-400 fill-current primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"></path><path class="secondary group-hover:text-blue-500 text-gray-500 fill-current" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"></path></svg>
              </a>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<script>

export default {
 data : () => ({
    product: {},
    products: [],
  }),

  watchers: {
    product(product) {
      return new Product(product);
    }
  },

  methods: {
    async setSelected(product) {
      await this.$store.dispatch('product/setSelected', product);
      this.$detail.open('Product is being selected....');
    }
  },

  async mounted() {
    await this.$store.dispatch('product/loadProducts');
    this.products = this.$store.getters["product/getProducts"];
  },
}
</script>

<style scoped>

</style>
