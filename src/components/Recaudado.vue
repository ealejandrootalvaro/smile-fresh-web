<template>
  <div class="container">
    <div class="form-group">
      <label for="">Mes</label>
      <select v-model="mes">
        <option v-bind:value="mes.id" v-for="mes in meses">{{mes.mes}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="">Año</label>
      <select class="" name="" v-model="year">
        <option v-bind:value="year" v-for="year in years">{{year}}</option>
      </select>

    </div>
    <button type="button" name="button" v-on:click="buscar">Buscar</button>
    <table class="table table-striped" v-show="resultados.length != 0">
        <thead>
          <tr>
            <th>Nombre Doctor</th>
            <th>Apellido Doctor</th>
            <th>Recaudo</th>
          </tr>
        </thead>

      <tbody class="text-left" >
        <tr v-for="cita in resultados" >

          <td >{{cita.nombre}}</td>
          <td>{{cita.apellido}}</td>
          <td >{{cita.recaudo}}</td>
        </tr>
      </tbody>


      </table>
      <p v-show="resultados.length == 0">No hay resultados</p>
  </div>
</template>

<script>

import axios from 'axios'
import moment from 'moment'

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
       estado:'',
       mes: '4',
       year:'2017',
       years: [2010,2011,2012,2013,2014,2015,2016,2017],
       resultados: [],
       meses: [{id: 0,mes:"Enero"},{id:1,mes:"Febrero"},{id:2,mes:"Marzo"},{id:3,mes:"Abril"},{id:4,mes:"Mayo"},{id:5,mes:"Junio"},{id:6,mes:"Julio"},{id:7,mes:"Agosto"},{id:8,mes:"Septiembre"},{id:9,mes:"Octubre"},{id:10,mes:"Noviembre"},{id:11,mes:"Diciembre"}]


    }
  },

    mounted(){
    this.citasPorMes = this.$store.state.citas;
  },

  computed: {



  },

 methods:{
    buscar(){
      var startDate = moment([this.year, this.mes]).format("MM-DD-YYYY");
      var endDate = moment(startDate).endOf('month').format("MM-DD-YYYY");

      axios.post('http://localhost:3888/api/cita/recaudo/fechas',{inicio:startDate,fin:endDate}).then((response)=>{
        console.log(response)
        this.resultados = response.data
      },(err) =>{
        console.log(err)
      })

    // just for demonstration:
    console.log(startDate);
    console.log(endDate);
    }

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
