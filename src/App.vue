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
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
      </template>
    </v-data-table>

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
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ],
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
  }
};

</script>
