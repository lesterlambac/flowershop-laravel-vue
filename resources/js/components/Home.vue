<template>
    <div class="container">
      <div class="grid grid-cols-10 gap-8">

          <div class="col-span-2">
            <button class="px-3 py-3 border-b-2 rounded-sm shadow-md font-semibold cursor-pointer block w-full text-left">
              🌹 Birthday
            </button>
            <button class="px-3 py-3 border-b-2 rounded-sm shadow-md font-semibold cursor-pointer block w-full text-left">
              🌷 Mother's Day
            </button>
            <button class="px-3 py-3 border-b-2 rounded-sm shadow-md font-semibold cursor-pointer block w-full text-left">
              🌼 Anniversary
            </button>
          </div>

          <div class="col-span-8">
            <div class="grid grid-cols-3" >

              <div class="px-2 py-2 bg-gray-100" v-for="item in 3" :key="item">

                <div class="container mx-auto">
                  <div class="flex flex-wrap -mx-4">
                    <div class="">
                      <a
                        href=""
                        class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                      >
                        <div class="relative pb-48 overflow-hidden">
                          <img
                            class="absolute inset-0 h-full w-full object-cover"
                            src="https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.6435-9/159535825_775628386685038_6567514546360816298_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGzAJmhkvEYEE8mPnQJ8ulw8Mh2wYiA15DwyHbBiIDXkJd9T4C1tuUBi4MkTcc2rxjC_CPYO4uWMcgEtbobA446&_nc_ohc=bERxgYOy0FIAX_zAxMo&_nc_ht=scontent.fmnl25-1.fna&oh=82dad327ba26448e4621f3ab4e168606&oe=60C6DE1F"
                            alt=""
                          />
                        </div>
                        <div class="p-4">
                          <span
                            class="inline-block px-2 py-1 leading-none bg-yellow-200 text-yellow-600 rounded-full font-semibold uppercase tracking-wide text-xs"
                            >Category</span
                          >
                          <h2 class="mt-2 mb-2 font-bold">
                            Purus Ullamcorper Inceptos Nibh
                          </h2>
                          <p class="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                          <div class="mt-3 flex items-center">
                            <span class="text-sm font-semibold">PHP</span>&nbsp;<span
                              class="font-bold text-xl"
                              >1,800</span>
                          </div>
                        </div>
                        <div class="p-4 border-t border-b text-xs text-gray-700">
                          <span class="flex items-center mb-1">
                            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i>
                             3 Tage
                          </span>
                          <span class="flex items-center">
                            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                            Ermäßigung mit Karte
                          </span>
                        </div>
                        <div class="p-4 flex items-center text-sm text-gray-600">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 fill-current text-yellow-500"
                          >
                            <path
                              d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                            ></path></svg
                          ><svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 fill-current text-yellow-500"
                          >
                            <path
                              d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                            ></path></svg
                          ><svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 fill-current text-yellow-500"
                          >
                            <path
                              d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                            ></path></svg
                          ><svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 fill-current text-yellow-500"
                          >
                            <path
                              d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                            ></path></svg
                          ><svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 fill-current text-gray-400"
                          >
                            <path
                              d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                            ></path></svg
                          ><span class="ml-2">34 Orders</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

      </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
