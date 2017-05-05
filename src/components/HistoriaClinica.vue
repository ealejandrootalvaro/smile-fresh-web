<template>
   <div class="container">
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Doctor</th>
            <th>Paciente</th>
            <th>Descripcion</th>
            <th>Diagnostico</th>
          </tr>
        </thead> 

      <tbody class="text-left" >
        <tr v-for="historia in historias">
          <td >{{historia.fecha}}</td>
          <td >{{historia.doctor}}</td>
          <td >{{historia.paciente}}</td>
          <td >{{historia.descripcion}}</td>
          <td >{{historia.diagnostico}}</td>
     
     
     
        </tr>
      </tbody>


    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
       historias:[],
       fecha:'',
       doctor:'',
       paciente:'',
       descripcion:'',
       diagnostico:''
       

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

.black-background {background-color:#4d4d4d;}
.white {color:#ffffff;}
</style>
