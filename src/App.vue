<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Traveling Shopper</v-toolbar-title>


      <v-spacer></v-spacer>


    </v-app-bar>
    <v-content>
      <ProductCards/>
    </v-content>


    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import ProductCards from './components/ProductCards';
const request = require('postman-request')
// import axios from 'axios';
export default {
  data () {
  return {
    singleSelect: false,
    drawer: null,
    selected: [],
  }
},
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
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilo0RmQzbXNrSUg4OGlydDdMQjVjNmc9PSIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4MjQ3NzM0MjIyNTQ2ODAwMCwiYXVkIjoidHJhdmVsaW5nc2hvcHBlci0wZGJhMTkzN2NkMDk3YjM0YjVjZDNiZjY5ZWRiOWVlMjkyMDI3NzM3MDcyODI4NjE0OTkiLCJleHAiOjE1ODI0NzkxNDIsImlhdCI6MTU4MjQ3NzMzNywiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJmYTMxOGFkOC04MGEwLTRjZjgtOGVhMS0xZWRmNzlmMWYzOWMifQ.adP32ulurDtbN1vqtJsXA9oPteqItqM09BQ8HJGRKCrdd931Y6h9ywO0i2iTzD-R-Gv2HAes5NUlu1O4ToHDaHrF7Th1h7SgKNG42b96S0k4--IWGEZJ7WcZwoUyyDsJSDSIUtooqEZCXBfBgnyOgQrvuQIrwYjwqXczIt-JubG6T6V5fP3IZBGAitkHAclodHnIsKSIIfBGB-UDjSWFUKr0HWqCoYTYxvRTuiPQUtS6yKaVuGy2Z9Wp1fef9eQ6ldiiRezZcSTHgmOmFWKREXCT6iA9wePkFMoWD3S_3e9rVnQby3zh0mjheIGQlD7OjEeq6wIbbyp7O_p9JzGkHg"
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
  }
};

</script>
