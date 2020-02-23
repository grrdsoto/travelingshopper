<template>
    <div>{{product.brand + " " + product.term}}</div>
</template>
<script>
export default {
    name: "ProductCard",
    props: ["product"]
    
}
</script>
