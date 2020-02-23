<template>
<v-container>
    <v-row>
    <v-card>
    <div>{{product.brand + " " + product.description}}</div>
    </v-card>

    </v-row>
</v-container>
</template>
<script>
export default {
    name: "ProductCard",
    props: ["product"]
    
}
</script>
