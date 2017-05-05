<template>
  <div class="container">
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Mes</th>
            <th>Doctor</th>
            <th>Valor</th>
          </tr>
        </thead> 

      <tbody class="text-left" >
        <tr v-for="recaudo in recaudos">
          <td >{{recaudo.mes}}</td>
          <td >{{recaudo.doctor}}</td>
          <td >{{recaudo.valor}}</td>
 
     
     
     
        </tr>
      </tbody>


      </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
       recaudos:[],
       mes:'',
       doctor:'',
       valor:''
       

    }
  },

  computed: {
   
  },

 methods:{
        //listarHistorias(){

    //}

  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
