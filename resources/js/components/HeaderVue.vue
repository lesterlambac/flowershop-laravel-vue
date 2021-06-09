<template>
  <div class="container">
    <header class="py-8 px-8 flex align-center justify-between mb-6">

      <div class="">
        <router-link class="font-bold text-xl tracking-wide text-pink-700" to="/">🌸 BloomFields</router-link>
      </div>

      <nav class="">
        <router-link class="pl-4 font-semibold leading-tight tracking-wide" to="/category">Create Category</router-link>
        <router-link class="pl-4 font-semibold leading-tight tracking-wide" to="/create-product">Create Product</router-link>
        <router-link class="pl-4 font-semibold leading-tight tracking-wide" to="/products">Products</router-link>
        <router-link class="pl-4 font-semibold leading-tight tracking-wide" to="/login">Login</router-link>
      </nav>

    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
