<template>
   <div class="container">
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Doctor</th>
            <th>Paciente</th>
            <th>Duracion de la cita</th>
            <th>Valor</th>
            <th>Estado</th>
          </tr>
        </thead>

            <tbody class="text-left" >
        <tr v-for="cita in citasMes">
          <td >{{cita.fecha}}</td>
          <td >{{cita.hora}}</td>
          <td >{{cita.doctor}}</td>
          <td >{{cita.paciente}}</td>
          <td >{{cita.duracion}}</td>
          <td >{{cita.valor}}</td>
           <td >{{cita.estado}}</td>
 
     
     
     
        </tr>
      </tbody>
 
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
       citasPorMes:[],
       fecha:'',
       hora:'',
       doctor:'',
       paciente:'',
       duracion:'',
       valor:'',
       estado:''

    }
  },

  mounted(){
    this.citasPorMes = this.$store.state.citas;
  },

  computed: {
    citas(){
      return this.$store.state.citas
    },

      citasMes(){
      
      var ordenados=this.$store.state.citas


      var  orden= ordenados.sort(function(a,b){
      a=a.fecha.split("-");
      b=b.fecha.split("-");
      return new Date(a[2], a[0],a[1] ) - new Date(b[2], b[0], b[1])
      })
      return orden
      console.log(ordenados)
     
    },


   
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
