<template>
  <div class="text-center">
    <div class="py-6 px-4 border-b">
      <router-link class="font-bold text-xl tracking-wide text-pink-700 hover:text-pink-700" to="/">🌸 BloomFields</router-link>
    </div>

    <div class="mt-6">
      <div class="px-3 py-3 rounded-sm font-semibold cursor-pointer block w-full text-left text-md flex hover:bg-gray-700 hover:text-white group transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 mr-2 icon-product hover:text-white fill-current" fill="#2E1E36"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
        Products
      </div>
      <div class="px-3 py-3 rounded-sm font-semibold cursor-pointer block w-full text-left text-md flex hover:bg-gray-700 hover:text-white group transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 mr-2 icon-collection hover:text-white fill-current"><rect width="20" height="12" x="2" y="10" class="primary" rx="2"></rect><path class="secondary" d="M20 8H4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2zm-2-4H6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path></svg>
         Categories
      </div>
      <div class="px-3 py-3 rounded-sm font-semibold cursor-pointer block w-full text-left text-md flex hover:bg-gray-700 hover:text-white group transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 mr-2 icon-user hover:text-white fill-current"><path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"></path><path class="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"></path></svg>
         Users
      </div>
      <div class="px-3 py-3 rounded-sm font-semibold cursor-pointer block w-full text-left text-md flex hover:bg-gray-700 hover:text-white group transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 mr-2 icon-cog hover:text-white fill-current"><path class="primary" d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><circle cx="12" cy="12" r="2" class="secondary"></circle></svg>
        Settings
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    console.log('Dashboard is mounted...');
  }
}
</script>

<style scoped>
.transition {
  transition: all 0.15s ease-out;
}

a {
  text-decoration: none;
}
</style>
