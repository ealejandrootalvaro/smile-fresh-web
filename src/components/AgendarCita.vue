<template>

<div class="container">
 <h1>Agenda tu cita</h1>
<p class="text-left">Selecciona una fecha en el calendario y llena el formulario para programar una cita con el doctor que se encuentre disponible ese dia.</p>

<!-- <button href="#modal2" class="btn btn-primary black-background white" data-toggle="modal">7/mayo/2017</button> -->


  <full-calendar :events="fcEvents" v-on:dayClick="onDayMethod" v-on:eventClick="onEventMethod" locale="zh"></full-calendar>


      <div class="modal fade" id="modal2">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                       <span aria-hidden="true">&times;</span>
                       <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title">Agendar Cita</h4>

              </div>

              <div class="modal-body">
                 <h5 class="text-left" >Ingrese la siguiente informacion para el  registro de una nueva cita.</h5>


                  <form role="form" id="myForm">
                  <div class="form-group">
                    <label for="cedulaUsuario">Usuario</label>
                      <select class="form-control" name="" v-model="paciente">
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
                   <tr v-for="medico in disponibles">

                   <!-- <p>{{dayf}}</p> -->
                  <td >{{medico.nombre}}</td>
                  <td >{{medico.apellido}}</td>

                  <td >{{medico.fecha}}</td>
                  <td >{{medico.hora}}</td>
                  <td >{{medico.duracion + " Minutos"}}</td>
                  <td ><input v-on:click="seleccionarCita(medico)" type="checkbox" name="seleccionar"></td>
                </tr>


                </tbody>
                  </table>
                  </div>




                  <input type="reset" value="Limpiar Campos" class="btn btn-primary black-background white" >


                </form>

              </div>



              <div class="modal-footer">

                <button type="button" class="btn btn-primary black-background white"
                        data-dismiss="modal">
                            Cerrar
                </button>
                <button @click="addCita" class="btn btn-primary black-background white">

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
      citaSeleccionada: ""

    }
  },

  components: {
    Horarios,
    fullCalendar
  },

  mounted(){
    this.fcEvents = this.$store.state.consultas;
  },



  methods: {
    addCita(){
      if(this.paciente != "" && this.citaSeleccionada != ""){
        this.$store.dispatch('ASIGNAR_CITA',{paciente: this.paciente, cita: this.citaSeleccionada, estado: "Asignada"})
        $('#modal2').modal('hide');
        this.paciente = ""
        this.citaSeleccionada = ""
      }else{
        alert("Ingrese todos los datos requeridos")
      }

    },

    seleccionarCita(cita){
      console.log(cita)
      this.citaSeleccionada = cita
    },

    onDayMethod(day, jsEvent){

      this.fechaSeleccionada = moment(day).format("DD-MM-YYYY")

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
      return this.$store.state.citas.filter(function(item){
        return item.fecha == dia && item.estado == "Disponible"
      })
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
