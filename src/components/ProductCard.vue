<template>
    <v-card
    class="mx-auto"
    max-width="500"
    outlined
    >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{product.brand }}</div>
        <v-list-item-title class="mb-1">{{product.description}}</v-list-item-title>
        <v-list-item-subtitle>{{product.categories[0]}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-img height="100" width="100" contain=true :src=product.images[0].sizes[3].url></v-img>
    </v-list-item>

    <v-card-actions>
      <v-btn color="primary">Add To Cart</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    name: "ProductCard",
    props: ["product"]
    
}
</script>
