<template>
<v-data-table
 :headers="headers"
 :items="items"
 hide-actions
 class="slideInDown"
>
 <template slot="items" slot-scope="props">
   <td>{{ props.item.nombre }}</td>
   <td class="text-xs-right">{{ props.item.calle }}</td>
   <td class="text-xs-right">{{ props.item.numExterior }}</td>
   <td class="text-xs-right">{{ props.item.numInterior }}</td>
   <td class="text-xs-right">{{ props.item.codigoPostal }}</td>
 </template>
</v-data-table>
</template>

<script>
  export default {
    methods: {
      getProductLocation: function(){
        fetch("http://localhost:3000/products")
        .then((response) => {
          return response.json()
        }).then((product) => {
            console.log(product)

        })
      }
    },
    name: 'HelloWorld',

    data: () => ({

    }),
  }
</script>
