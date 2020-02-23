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
  data () {
    return {
        items: [
         {
           nombre: "",
           calle: "",
           numExterior: "",
           numInterior:"",
           codigoPostal: "",
         }
        ],
    }
  },

  methods:{

     }
created(){

  axios.get('localhost:8080/api/GetEstaciones',
  { headers:{ "Authorization": "Bearer "+localStorage.getItem('token') } }) .then(response =>
  { console.log(response) this.items = response.data; }) .catch(error =>
  { console.log(error.response) });
},
mounted() {
          var url_params = {}
       if( window.location.toString().indexOf("?") != -1) {
          window.location.search.split('?')[1].replace(/([^=&]+)=([^&]*)/g, function(m, key, value) {
             url_params[decodeURIComponent(key)] = decodeURIComponent(value);
          });
       } else {
          url_params = { as:"lbls" };
       }
       this.UrlParams = url_params;
          axios.get((window.location.pathname).replace("/list/" , "/select/") , { params: url_params } )
          .then(response => {
              this.gridData = response.data.dat ;
              this.pageSize = url_params['page-size'] || 10 ;
              this.pageNum = url_params['page-num'] || 1 ;
          var totalRSsize = response.data.met ;
          var remainder = totalRSsize % this.pageSize
          var toAdd = 1 // page-size 10 , total-rs-size 30 => 3 and not 4
          if ( remainder == 0 ) { toAdd = 0  }
              this.pagesCount = Math.floor(totalRSsize/this.pageSize ) + toAdd
          })
          .catch(function(error) {
              document.getElementById("div_msg").innerHTML="<span id=\"spn_err_msg\">" + error.response.data.msg + '</span>'
          })
    }


}
</script>
