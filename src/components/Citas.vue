<template>
   <div class="container">
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Doctor</th>
            <th>Paciente</th>
            <th>Duracion</th>
            <th>valor</th>
          </tr>
        </thead> 
          <tbody class="text-left" >
        <tr v-for="cita in citas">
          <td >{{cita.fecha}}</td>
          <td >{{cita.hora}}</td>
          <td >{{cita.doctor}}</td>
          <td >{{cita.paciente}}</td>
          <td >{{cita.duracion}}</td>
          <td >{{cita.valor}}</td>
 
     
     
     
        </tr>
      </tbody>
 

    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
       listaCitas:[],
       fecha:'',
       hora:'',
       doctor:'',
       paciente:'',
       duracion:'',
       valor:''
       

    }
  },

  computed: {
        citas(){
      return this.$store.state.citas
    }
   
  },

 methods:{
     

   

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
