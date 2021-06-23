<template>
  <div class="">
    <div class="">
      <div class="col-md-6">
        <div class="card">

          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col">
            <div class="mb-4">
              <label class="block text-grey-700 text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700" id="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
              <label class="block text-grey-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-700 mb-3" id="password" type="password" placeholder="******************">
              <p class="text-red text-xs italic">Please choose a password.</p>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button" @click="login">
                Sign In
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700" href="#">
                Forgot Password?
              </a>
            </div>
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
    product: {
      name: 'Product Name',
      content: 'Product Content...',
      price: '78',
    },
  }),

  methods: {
    login() {
      axios.post('/api/login', {
        email: 'lester@example.com',
        password: 'password',
      })
      .then(response => {
        localStorage.setItem('access_token', response.data.access_token);
        console.log(response.data)

        // change this later
        this.$store.dispatch('login', true);
        this.$router.push('/admin');
      })
      .catch(e => {
        console.log(e);
      });
    }
  },

  mounted() {
    console.log('Component mounted.')
    axios.get('/api/product')
    .then(response => {
      console.log(response.data)
    })
    .catch(e => {
      console.log(e);
    });

    console.log('Auth Test...')
    console.log(this.$store.getters.isAuth);
  },
}
</script>
