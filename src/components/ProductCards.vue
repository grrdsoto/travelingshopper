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
  props: ["productcards"]
}
</script>