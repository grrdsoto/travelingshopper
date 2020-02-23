<template>
  <div> </div>
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
