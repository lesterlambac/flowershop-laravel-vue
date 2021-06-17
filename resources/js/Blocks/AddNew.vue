<template>
  <div @click="addNew" class="fixed bottom-12 right-12 w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center shadow-sm border border-white cursor-pointer">
    <span class="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 icon-add"><path class="secondary text-white fill-current" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"></path></svg>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    async addNew() {
      this.$emit('addNew', await this.$store.getters['getSelected']);
    }
  }
}
</script>
