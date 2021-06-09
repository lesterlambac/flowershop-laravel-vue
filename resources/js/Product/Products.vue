<template>
    <div class="container">

        <div class="px-2 py-2 bg-gray-100" v-for="(product, index) in products" :key="product.id + index">
          <div class="container mx-auto">
            <div class="">
              <div class="">
                <div
                  href=""
                  class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden
                  grid grid-cols-12"
                >
                  <div class="col-span-4 relative pb-48 overflow-hidden">
                    <img
                      class="absolute inset-0 h-full w-full object-cover"
                      src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/159535825_775628386685038_6567514546360816298_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGzAJmhkvEYEE8mPnQJ8ulw8Mh2wYiA15DwyHbBiIDXkJd9T4C1tuUBi4MkTcc2rxjC_CPYO4uWMcgEtbobA446&_nc_ohc=bERxgYOy0FIAX_zAxMo&_nc_ht=scontent.fmnl25-1.fna&oh=82dad327ba26448e4621f3ab4e168606&oe=60C6DE1F"
                      alt=""
                    />
                  </div>

                  <div class="col-span-6 p-4">
                    <span
                      class="inline-block px-2 py-1 leading-none bg-yellow-200 text-yellow-600 rounded-full font-semibold uppercase tracking-wide text-xs"
                      >{{ product.category ?  product.category.name : ''}}</span
                    >
                    <h2 class="mt-2 mb-2 font-bold">
                      {{ product.name }}
                    </h2>
                    <p class="text-sm">
                      {{ product.description }}
                    </p>
                    <div class="mt-3 flex items-center">
                      <span class="text-sm font-semibold">PHP</span>&nbsp;<span
                        class="font-bold text-xl"
                        >{{ product.price }}</span>
                    </div>
                  </div>
 
                  <div class="col-span-2 p-4 border-t border-b text-xs text-gray-700">
                    <span class="flex items-center mb-1">
                      <span class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700 cursor-pointer">Edit</span>
                    </span>
                    <span class="flex items-center mb-1">
                      <span @click="deleteItem({productID: product.id, location: index})" class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-700 cursor-pointer">Delete</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
  import Product from '../Models/Product.js';
  export default {
    data: () => ({
      reloadProducts: 0,
      products: [],
    }),

    methods: {
      deleteItem({productID, location}) {
        console.log(productID, location);

        this.products.splice(location, 1);
        this.reloadProducts++;

        axios.delete(`/api/product/${productID}`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => {
          console.log(response.data)
        })
        .catch(e => {
          console.log(e);
        });

      }
    },
    mounted() {
        console.log('Component mounted.')
    },
    async created() {
      try {
        const res = await axios.get('/api/product');
        if(res.data) {
          this.products = res.data.map((product) => new Product(product));
        }
        console.log(this.products);
      }
      catch (error) {
        console.log(error);
      }
    }
  }
</script>
