<template>

<div class="container">
 <h1>Agenda tu cita</h1>
<p class="text-left">Selecciona una fecha en el calendario y llena el formulario para programar una cita con el doctor que se encuentre disponible ese dia.</p>

<!-- <button href="#modal2" class="btn btn-primary black-background white" data-toggle="modal">7/mayo/2017</button> -->


  <full-calendar :events="todasCitasDisponibles" v-on:dayClick="onDayMethod" v-on:eventClick="onEventMethod" locale="zh"></full-calendar>


      <div class="modal fade" id="modal2" style="font-family: 'Times New Roman';font-size: 20px;">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                       <span aria-hidden="true">&times;</span>
                       <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title" style="font-family: 'Times New Roman';font-size: 40px;">Agendar Cita</h4>

              </div>

              <div class="modal-body">
                 <h5 class="text-left" style="font-family: 'Times New Roman';font-size: 20px;" >Ingrese la siguiente informacion para el  registro de una nueva cita.</h5>


                  <form role="form" id="myForm" style="font-family: 'Times New Roman';font-size: 20px;">
                  <div class="form-group">
                    <label for="cedulaUsuario">Usuario</label>
                      <select class="form-control" name="" v-model="paciente" style="font-family: 'Times New Roman';font-size: 20px;">
                        <option v-for="paciente in pacientes" v-bind:value="paciente.id">{{paciente.nombre +" "+paciente.apellido}}</option>
                      </select>
                  </div>
                  <div class="form-group">
                    <label for="entradaApellidos">Doctores disponbles.</label>

                      <table class="table table-striped">
                      <thead>
                      <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Dia</th>
                      <th>Entrada</th>
                      <th>Duracion</th>
                      <th>Seleccionar</th>

                   </tr>
                    </thead>
                 <tbody class="text-left" >
                   <tr v-for="medico in disponibles" style="font-family: 'Times New Roman';font-size: 15px;">

                   <!-- <p>{{dayf}}</p> -->
                  <td >{{medico.nombre}}</td>
                  <td >{{medico.apellido}}</td>

                  <td >{{medico.fecha}}</td>
                  <td >{{medico.hora}}</td>
                  <td >{{medico.duracion + " Minutos"}}</td>
                  <td ><input v-on:click="seleccionarCita(medico)" type="checkbox" v-bind:checked="citaSeleccionada!=''" name="seleccionar"></td>

                </tr>


                </tbody>
                  </table>
                  <div v-show="citaSeleccionada" class="form-group">
                    <label>Ingrese el costo de la cita</label>
                    <input type="number" v-model="valor" name="" class="form-control" value="" style="font-size:30px">
                  </div>
                  </div>



                </form>

              </div>



              <div class="modal-footer">

                <button type="button" class="btn btn-primary black-background white"
                        data-dismiss="modal" style="font-family: 'Times New Roman';font-size: 20px;">
                            Cerrar
                </button>
                <button @click="addCita" class="btn btn-primary black-background white" style="font-family: 'Times New Roman';font-size: 20px;">

                             Aceptar
                </button>


              </div>
            </div>
          </div>
     </div>



</div>
</template>

<script>

import moment from 'moment'
import fullCalendar from 'vue-fullcalendar'
import Horarios from './Horarios'
export default {

  data () {
    return {
      paciente: "",
      fcEvents: [],
      fechaSeleccionada: "",
      citaSeleccionada: "",
      valor: ""

    }
  },

  components: {
    Horarios,
    fullCalendar
  },

  created(){


  },



  methods: {
    addCita(){
      if(this.paciente != "" && this.citaSeleccionada != "" && this.valor != ""){
        this.$store.dispatch('ASIGNAR_CITA',{paciente: this.paciente, cita: this.citaSeleccionada, estado: "Asignada", valor: this.valor, router: this.$router})
        $('#modal2').modal('hide');
        this.paciente = ""
        this.citaSeleccionada = ""
      }else{
        alert("Ingrese todos los datos requeridos")
      }

    },

    seleccionarCita(cita){
      console.log(cita)
      if(this.citaSeleccionada == cita){
        this.citaSeleccionada = ""
      }else{
        this.citaSeleccionada = cita
      }

    },

    onDayMethod(day, jsEvent){
      console.log(moment())
      this.fechaSeleccionada = moment(day).format("MM-DD-YYYY")
      this.citaSeleccionada = ""
      $('#modal2').modal();

           //alert('a day has been clicked!');
    },

    onEventMethod(){

    }


  },

  computed: {

    citas(){
      return this.$store.state.citas
    },

    disponibles(){
      var dia = this.fechaSeleccionada;
      var disponibles = this.$store.state.citas.filter(function(item){
        return item.fecha == dia && item.estado == "Disponible"
      })

      return disponibles

    },

    todasCitasDisponibles(){

      var disponibles = this.$store.state.citas

      for (var i = 0; i < disponibles.length; i++) {
        var fecha = moment(disponibles[i].fecha).format('MM-DD-YY');
        disponibles[i].start = fecha;
        disponibles[i].title = disponibles[i].estado

      }

      return disponibles
    },

    pacientes(){
      return this.$store.state.pacientes
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



.black-background {background-color:#4d4d4d;}
.white {color:#ffffff;}

</style>
