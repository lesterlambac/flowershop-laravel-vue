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
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Delete</a>
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
