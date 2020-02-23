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
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import ProductCards from './components/ProductCards';
// import axios from 'axios';
export default {
  methods: {
      mounted: function(){
        var headers = {
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilo0RmQzbXNrSUg4OGlydDdMQjVjNmc9PSIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4MjQ1MDQ1MDI0NzQxNzMyMCwiYXVkIjoidHJhdmVsaW5nc2hvcHBlci0wZGJhMTkzN2NkMDk3YjM0YjVjZDNiZjY5ZWRiOWVlMjkyMDI3NzM3MDcyODI4NjE0OTkiLCJleHAiOjE1ODI0NTIyNTAsImlhdCI6MTU4MjQ1MDQ0NSwiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJmYTMxOGFkOC04MGEwLTRjZjgtOGVhMS0xZWRmNzlmMWYzOWMifQ.X-tFTtSlhgp3dR7rDlDsBt-ldg3PuwpfTj8oJjRZdu6yS_FZCyDZkFe6C2eEVv-3Adu34iJuqkWFag9GxU2wWkaadRYveDGZQ56pbtknnh1lbRNj7qUzH-L--qcPfJ4jM_JF_8SnBiv0KpoGHUqW-59pjl4dXAwtvjqEME_XwQebAHtF0eSVGzvPrB0o9K2niqNr89npViar7BRGVMWeJtOHSouodR4L3uNw_3sWRxNvHrl0yA6dV6LA7hqMEHuz5bt9LKdSQi94fmj9PKhmOMjD_zXdB4l-CQ3XTbRmVJQJnAA26S08_UZ5JcwXQfqfveTSlk1cnV3WHPKnawZbKg"
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

  data: () => ({
    drawer: null,
  }),
};
}
</script>
