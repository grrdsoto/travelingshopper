<template>
<div>
 <div v-bind:key="product.id" v-for="product in productcards">
    <ProductCard v-bind:product = "product"/>
 </div>
</div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
  name: "ProductCards",
  components: {
    ProductCard
  },
  data () {
    return {
      productcards: null
    }
  },
  mounted(){
    this.getProductLocation()
  },
  methods:{
    getProductLocation: function(){
        var headers = {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilo0RmQzbXNrSUg4OGlydDdMQjVjNmc9PSIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4MjQ2ODA1MTgyMjY0NjYxNSwiYXVkIjoidHJhdmVsaW5nc2hvcHBlci0wZGJhMTkzN2NkMDk3YjM0YjVjZDNiZjY5ZWRiOWVlMjkyMDI3NzM3MDcyODI4NjE0OTkiLCJleHAiOjE1ODI0Njk4NTEsImlhdCI6MTU4MjQ2ODA0NiwiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJmYTMxOGFkOC04MGEwLTRjZjgtOGVhMS0xZWRmNzlmMWYzOWMifQ.VaNFVBCg961myMmjqrTqUG2yZbTVbzJLWS1GDxmi5FD3kC36T1DMNzA0k97CiPpd_iKC-pZYeHIsJoyfacup9Tw-byG6ikWp-8DMWc1Q9CHoLQyz7yz5BeQgQtv0vxiOT0lbL2CSyzRjI-v-Xtq9gRCng-cToXYY_Wyry33tr85IGovyMXrgV_IY2SiWWQX0QItab6eATN-FmvT1V8VGjGsR3hcb2GOevXq4XC4lGQuZQAH8GlbEp6aVXp0-bLFx-K9BTb7Ktdztp1bfPnYL4xxXTvIXcnNi-CQh6r9EeIjfx217sHBLKD3wln84b6ocnVpdW2lFyfKjL4NnwWqO_A"
        }
        // console.log(headers)
        
        fetch("http://localhost:3000/products", {method: "GET", headers: headers})
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            this.productcards = response["data"]
            
        })
      }
  }

}
</script>