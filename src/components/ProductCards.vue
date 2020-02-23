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
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilo0RmQzbXNrSUg4OGlydDdMQjVjNmc9PSIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4MjQ3NzM0MjIyNTQ2ODAwMCwiYXVkIjoidHJhdmVsaW5nc2hvcHBlci0wZGJhMTkzN2NkMDk3YjM0YjVjZDNiZjY5ZWRiOWVlMjkyMDI3NzM3MDcyODI4NjE0OTkiLCJleHAiOjE1ODI0NzkxNDIsImlhdCI6MTU4MjQ3NzMzNywiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJmYTMxOGFkOC04MGEwLTRjZjgtOGVhMS0xZWRmNzlmMWYzOWMifQ.adP32ulurDtbN1vqtJsXA9oPteqItqM09BQ8HJGRKCrdd931Y6h9ywO0i2iTzD-R-Gv2HAes5NUlu1O4ToHDaHrF7Th1h7SgKNG42b96S0k4--IWGEZJ7WcZwoUyyDsJSDSIUtooqEZCXBfBgnyOgQrvuQIrwYjwqXczIt-JubG6T6V5fP3IZBGAitkHAclodHnIsKSIIfBGB-UDjSWFUKr0HWqCoYTYxvRTuiPQUtS6yKaVuGy2Z9Wp1fef9eQ6ldiiRezZcSTHgmOmFWKREXCT6iA9wePkFMoWD3S_3e9rVnQby3zh0mjheIGQlD7OjEeq6wIbbyp7O_p9JzGkHg"
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
