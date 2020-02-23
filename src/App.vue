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
      <ProductCards/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import ProductCards from './components/ProductCards';
const request = require('postman-request')
// import axios from 'axios';
export default { 
  methods: {
      mounted: function(){
        request('http://localhost:3000/connect/oauth2/token', function(error, response){
          console.log("error", error);
          console.log("Here")
          console.log("token_type", response)
        });
        // var authtoken = token_type + " " + access_token
        // try{fetch("http://localhost:3000/connect/oauth2/token", {method: "GET", headers: headers, mode: "no-cors"})
        // }catch{

        // }
        
        var headers = {
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilo0RmQzbXNrSUg4OGlydDdMQjVjNmc9PSIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4MjQ2ODA1MTgyMjY0NjYxNSwiYXVkIjoidHJhdmVsaW5nc2hvcHBlci0wZGJhMTkzN2NkMDk3YjM0YjVjZDNiZjY5ZWRiOWVlMjkyMDI3NzM3MDcyODI4NjE0OTkiLCJleHAiOjE1ODI0Njk4NTEsImlhdCI6MTU4MjQ2ODA0NiwiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJmYTMxOGFkOC04MGEwLTRjZjgtOGVhMS0xZWRmNzlmMWYzOWMifQ.VaNFVBCg961myMmjqrTqUG2yZbTVbzJLWS1GDxmi5FD3kC36T1DMNzA0k97CiPpd_iKC-pZYeHIsJoyfacup9Tw-byG6ikWp-8DMWc1Q9CHoLQyz7yz5BeQgQtv0vxiOT0lbL2CSyzRjI-v-Xtq9gRCng-cToXYY_Wyry33tr85IGovyMXrgV_IY2SiWWQX0QItab6eATN-FmvT1V8VGjGsR3hcb2GOevXq4XC4lGQuZQAH8GlbEp6aVXp0-bLFx-K9BTb7Ktdztp1bfPnYL4xxXTvIXcnNi-CQh6r9EeIjfx217sHBLKD3wln84b6ocnVpdW2lFyfKjL4NnwWqO_A"
        }
        console.log(headers)
        fetch("http://localhost:3000/products", {method: "GET", headers: headers, mode: "no-cors"})
        .then((response) => {
          this.data = response.json()
        }).then((product) => {
            console.log(product)
            
        })
      }
    },
  name: 'App',

  components: {
    ProductCards
  },
}
</script>
