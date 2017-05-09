<template>
   <div class="container">
     <div class="">
       <label for="">Estado</label>
       <select class="" name="" v-model="estado">
         <option value="Disponible">Disponible</option>
         <option value="Agendada">Agendada</option>
         <option value="Cerrada">Cerrada</option>
       </select>
     </div>
     <div class="">
       <label for="">Mes</label>
       <select class="" name="" v-model="mes">
         <option v-bind:value="mes.id" v-for="mes in meses">{{mes.mes}}</option>
       </select>
     </div>
     <div class="">
       <label for="">Año</label>
       <select class="" name="" v-model="year">
         <option v-bind:value="year" v-for="year in years">{{year}}</option>
       </select>
     </div>
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Doctor</th>
            <th>Paciente</th>
            <th>Duracion</th>
            <th>valor</th>
            <th>Estado</th>
            <th>Consulta</th>
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
          <td >{{cita.estado}}</td>
          <td><router-link v-if="cita.estado == 'Asignada'" :to="{name: 'consulta', params: {id: cita.idCita}}">Ir a consulta</router-link></td>




        </tr>
      </tbody>


    </table>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  data () {
    return {
       listaCitas:[],
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

  computed: {
        citas(){

          var self = this;

          return this.$store.state.citas.filter(function(item){
            console.log(moment(item.fecha).format('YYYY'))
            var bandera = true
            if(self.estado && self.estado != item.estado){
              return false
            }else if (self.mes && self.mes != moment(item.fecha).format('M')-1) {
              return false
            }else if (self.year && self.year != moment(item.fecha).format('YYYY')){
              return false
            }
            return bandera
          })

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
