<template>
  <div class="grid grid-cols-12 h-screen">
    <div class="col-span-2 bg-white-100 border-r">
      <Sidebar />
    </div>
    <div class="col-span-7">
      <Dashboard />
    </div>
    <div class="col-span-3 bg-gray-100">
      <Details />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Details from './Details';

export default {
  components: {
    Sidebar,
    Dashboard,
    Details,
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>
