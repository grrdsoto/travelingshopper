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
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ilo0RmQzbXNrSUg4OGlydDdMQjVjNmc9PSIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTU4MjQ1MzA3Nzc3OTQ0MTU4NSwiYXVkIjoidHJhdmVsaW5nc2hvcHBlci0wZGJhMTkzN2NkMDk3YjM0YjVjZDNiZjY5ZWRiOWVlMjkyMDI3NzM3MDcyODI4NjE0OTkiLCJleHAiOjE1ODI0NTQ4NzcsImlhdCI6MTU4MjQ1MzA3MiwiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJmYTMxOGFkOC04MGEwLTRjZjgtOGVhMS0xZWRmNzlmMWYzOWMifQ.B9R5ElNBwLI3_NsGAjFwRQSURPbAlNkeat0cInaU4jbU6iogB8yfbhueln2ZuUUNaNywp0LmNHtkLJIBxbw2BW_AVeUPVJavNEnJ5Zi8NaGCgxQ-TAsCUkxhfO6Wz7SNtzq_yU5mLMX3e2d-IkjYyC0_rV_qhSIw7OfK4qvjB--bKLRpN4caRIRKXMXFzDF9RDzKTjaAhDTBLy6pCUqWOhgjDt_dtksDxIdkP20fnwjVoXYZH6GlXanZyZ_vAL4gjNMM9NbDWc6ugddiGqoHLCImMIDqllJm5qrhSosSJEA7C7YyOOWK0ShzINuROXcJ2y3lpxVnY1rcvpIluSjNIA"
        }
        console.log(headers)
        
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