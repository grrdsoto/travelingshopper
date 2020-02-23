<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt=""
          class="shrink mr-2"
          contain
          src=""
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-content>
      <ProductCard/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import ProductCard from './components/ProductCard';
import axios from 'axios';
export default { 
  methods: {
      mounted: function(){
        fetch("http://localhost:3000/products")
        .then((response) => {
          this.data = response.json()
        }).then((product) => {
            console.log(product)
            
        })
      }
    },
  name: 'App',

  components: {
    data: () => ({

    })
  },
</script>
