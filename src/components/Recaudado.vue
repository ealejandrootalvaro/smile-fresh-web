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
        <tr v-for="cita in citasMes">
          <td >{{cita.fecha}}</td>
          <td >{{cita.doctor}}</td>
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
       recaudos:[],
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


      
      return ordenados
      console.log(ordenados)
     
    }
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
