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
              Linked Posts
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>

        <tbody v-if="categories.length" class="bg-white divide-y divide-gray-200">
          <tr v-for="(category) in categories" :key="category.id" @click="setSelected(category)" class="cursor-pointer hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full object-cover" :src="'image/bloomfields.jpg'" alt="">
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ category.name }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                {{ '13' }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              <a href="#" class="text-indigo-600 hover:text-indigo-900 pl-8">Delete</a>
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
    category: {},
    categories: [],
  }),

  watchers: {
    category(category) {
      return new Category(category);
    }
  },

  methods: {
    async setSelected(category) {
      await this.$store.dispatch('category/setSelected', category);
      this.$detail.open('category is being selected....');
    }
  },

  async mounted() {
    await this.$store.dispatch('category/loadCategories');
    this.categories = this.$store.getters["category/getCategories"];
  },
}
</script>

<style scoped>

</style>
