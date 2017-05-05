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
                    <label for="cedulaUsuario">Cedula Usuario</label>
                      <input type="text" class="form-control"
                      id="cedulaUsuario" placeholder="Ingrese la CC o TI" v-model="nuevaCC"/>
                  </div>
                  <div class="form-group">
                    <label for="entradaApellidos">Doctores disponbles.</label>
                    
                      <table class="table table-striped">
                      <thead>
                      <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Email</th>
                      <th>Dia</th>
                      <th>Entrada</th>
                      <th>Salida</th>
                      <th>Seleccionar</th>

                   </tr>
                    </thead>
                 <tbody class="text-left" >
                   <tr v-for="medico in doctores" v-if="dayf == medico.dia">
                  
                   <!-- <p>{{dayf}}</p> -->
                  <td >{{medico.nombre}}</td>
                  <td >{{medico.apellido}}</td>
                  <td >{{medico.email}}</td>        
                  <td >{{medico.dia}}</td>                
                  <td >{{medico.horaent}}</td>
                  <td >{{medico.horasal}}</td>
                  <td ><input type="checkbox" name="seleccionar" value="Medseleccionado"></td>
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
      nuevaCC: "",
      fcEvents: [],
      dayf:""
      
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
      if(this.nuevaCC != ""){
        this.$store.commit('ADD_CITA',{cedula_paciente: this.nuevaCC, start: "2017-05-07", title: "Cita paciente "+this.nuevaCC})
        $('#modal2').modal('hide');
        this.nuevaCC = ""
      }

    },

    onDayMethod(day, jsEvent){



      //alert('Clicked on: ' + date.day());
      var dayz= moment(day).format('dddd');
      if(dayz=="Monday"){
           
           this.dayf= dayz.replace("Monday", "Lunes");
           //alert(this.dayf);
      }else{
           if(dayz=="Tuesday"){
           
           this.dayf= dayz.replace("Tuesday", "Martes");
           
      }else{
           
           if(dayz=="Wednesday"){
           
           this.dayf= dayz.replace("Wednesday", "Miercoles");
           
      }else{
           
           if(dayz=="Thursday"){
           
           this.dayf= dayz.replace("Thursday", "Jueves");
           
      }else{
           
           if(dayz=="Friday"){
           
           this.dayf= dayz.replace("Friday", "Viernes");
           
      }else{
           
           if(dayz=="Saturday"){
           
           this.dayf= dayz.replace("Saturday", "Sabado");
           
      }else{
           
           if(dayz=="Sunday"){
           
           this.dayf= dayz.replace("Sunday", "Domingo");
           
                             }
                   }
                }
              }
            }
          }      
      }
      
      $('#modal2').modal();
     
           //alert('a day has been clicked!');
    },

    onEventMethod(){

    }

    
  },

  computed: {

    doctores(){
      return this.$store.state.doctores
    },
    diaSeleccionado(){

      return this.$store.state.diaSeleccionado
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
