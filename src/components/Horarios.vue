<template>
  <div class="container">
    <h1>Horarios de los medicos</h1>
    <p class="text-left">En la siguiente tabla se encuentran registrados los diferentes horarios para cada uno de
      los medicos de smile fresh. Ademas se encuentra la posibilidad de agregar nuevos horarios y eliminar
      los que sean seleccionados con las casillas de la ultima columna.</p>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Dia</th>
            <th>Entrada</th>
            <th>Salida</th>
            <th>Eliminar</th>

          </tr>
        </thead>
        <tbody class="text-left" >
          <tr v-for="medico in horarios">
            <td >{{medico.idHorario + " " +medico.nombre}}</td>
            <td >{{medico.apellido}}</td>
            <td >{{medico.email}}</td>
            <td >{{medico.dia}}</td>
            <td >{{medico.inicio}}</td>
            <td >{{medico.fin}}</td>
            <td ><input v-on:click="clickMedico(medico.idHorario)" type="checkbox" name="eliminar" value="eliminar"></td>
          </tr>

        </tbody>
      </table>



      <button href="#modal1" class="btn btn-primary black-background white" data-toggle="modal">Nuevo Horario</button>

      <button  @click="eliminar" class="btn btn-primary black-background white" >Eliminar Horarios Seleccionados</button>


      <div class="modal fade" id="modal1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                <span aria-hidden="true">&times;</span>
                <span class="sr-only">Close</span>
              </button>
              <h4 class="modal-title">Ingresar Nuevo Horario</h4>

            </div>

            <div class="modal-body">
              <h5 class="text-left" >Ingrese la siguiente informacion referente al registro de un nuevo horario para un medico.</h5>



          <label for="doctor">Seleccione un medico </label>
              <form role="form" id="myForm">
                <div class="form-group">
                  <select class="form-control" name="" v-model="doctor">
                    <option v-bind:value="item.id" v-for="item in doctores">{{item.nombre + " " + item.apellido}}</option>
                  </select>
                </div>



                <div class="form-group">
                  <label for="dia">Dia de la Semana</label>

                  <select class="form-control" v-model="dia">
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miercoles">Miercoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sabado">Sabado</option>
                    <option value="Domingo">Domingo</option>
                  </select>
                </div>

                <!-- <div class="form-group">
                  <label for="horaEntrada">Hora de Entrada</label>
                  <input id="horaEntrada" placeholder="Ingrese la hora de entrada." type="time" class="form-control" name="" value="" v-model="nuevaHoraE">
                </div> -->

                <div class="form-group">
                  <label for="nuevaHoraE">Hora de entrada</label>

                  <select class="form-control" v-model="nuevaHoraE">
                    <option value=" 8:00 a.m.">8:00 a.m.</option>
                    <option value=" 9:00 a.m.">9:00 a.m.</option>
                    <option value="10:00 a.m.">10:00 a.m.</option>
                    <option value="11:00 a.m.">11:00 a.m.</option>
                    <option value="12:00 a.m.">12:00 a.m.</option>
                    <option value=" 1:00 p.m.">1:00 p.m.</option>
                    <option value=" 2:00 p.m.">2:00 p.m.</option>
                    <option value=" 3:00 p.m.">3:00 p.m.</option>
                    <option value=" 4:00 p.m.">4:00 p.m.</option>
                    <option value=" 5:00 p.m.">5:00 p.m.</option>
                    
                  </select>
                </div>


                <!-- <div class="form-group">
                  <label for="horaSalida">Hora de Salida</label>
                  <input id="horaSalida" placeholder="Ingrese la hora de salida." type="time" class="form-control" name="" value="" v-model="nuevaHoraS">
                </div>
 -->

              <div class="form-group">
                    <label for="nuevaHoraS">Hora de salida</label>


                    <select class="form-control" v-model="nuevaHoraS">         
                    <option value=" 9:00 a.m.">9:00 a.m.</option>
                    <option value="10:00 a.m.">10:00 a.m.</option>
                    <option value="11:00 a.m.">11:00 a.m.</option>
                    <option value="12:00 a.m.">12:00 a.m.</option>
                    <option value=" 1:00 p.m.">1:00 p.m.</option>
                    <option value=" 2:00 p.m.">2:00 p.m.</option>
                    <option value=" 3:00 p.m.">3:00 p.m.</option>
                    <option value=" 4:00 p.m.">4:00 p.m.</option>
                    <option value=" 5:00 p.m.">5:00 p.m.</option>
                    <option value=" 6:00 p.m.">6:00 p.m.</option>
                  </select>
                </div>





               <!--  <input type="reset" value="Limpiar Campos" class="btn btn-primary black-background white" > -->
                <input type="button" name="clear" value="Limpiar Campos" @click="clearForm(this.myForm)" class="btn btn-primary black-background white">





              </form>


            </div>


            <div class="modal-footer">

              <button type="button" class="btn btn-primary black-background white"
              data-dismiss="modal">
              Cerrar
            </button>
            <button type="button" @click="addHorario" class="btn btn-primary black-background white">

              Aceptar
            </button>


          </div>
        </div>
      </div>
    </div>


  </div>
</div>

</template>

<script>





export default {




  data () {
    return {
      doctor: 0,
      listaDoctores:[],
      nuevoName:'',
      nuevoApellido:'',
      nuevoEmail:'',
      nuevaHoraE:'',
      nuevaHoraS:'',
      dia:''

    }
  },

  computed: {
    horarios(){
      console.log(this.$store.state.horarios)
      return this.$store.state.horarios
    },

    doctores(){
      return this.$store.state.doctores
    }
  },

  mounted(){
    console.log("hola");
    $('#timepicker1').timepicker();
  },

  methods:{
    addHorario(){


       
      
           

        if(this.doctor=="" || this.dia=="" || this.nuevaHoraE=="" || this.nuevaHoraS==""){

        alert('Asegurese de hacer  todas las selecciones en los campos del formulario.');
        $('#modal1').modal('show');
        }else{




                  if(parseInt(this.nuevaHoraE.substring(0,2))==parseInt(this.nuevaHoraS.substring(0,2))){


                        alert('Las Horas de entrada y salida deben ser diferentes.');
                        $('#modal1').modal('show');

                  }
                    else{



                    if(this.nuevaHoraE.charAt(6)=="p"  &&  this.nuevaHoraS.charAt(6)=="a"){
                        alert('Cambie las horas de entrada y salida. No puede entrar en la tarde y salir en la mañana');
                        $('#modal1').modal('show');

                    }else{


                            if(this.nuevaHoraE.charAt(6)=="a" && this.nuevaHoraS.charAt(6)=="a" && parseInt(this.nuevaHoraS.substring(0,2))<parseInt(this.nuevaHoraE.substring(0,2))){

                                alert('La hora de salida no puede ser menor a la hora de entrada.');
                                $('#modal1').modal('show');



                            }else{

                                if(this.nuevaHoraE.charAt(6)=="p" && this.nuevaHoraS.charAt(6)=="p" && parseInt(this.nuevaHoraS.substring(0,2))<parseInt(this.nuevaHoraE.substring(0,2))){
                                  alert('La hora de salida no puede ser menor a la hora de entrada.');
                                 $('#modal1').modal('show');
                                }else{
                                     this.$store.dispatch('ADD_HORARIO',{doctor: this.doctor, dia: this.dia,inicio: this.nuevaHoraE,fin: this.nuevaHoraS});
                                      $('#modal1').modal('hide');
                                }

                            }

                    }

                  }   

        }
      //alert('adding name');
      
    },
    clearForm(elform){
        var elementosFormu = elform.elements;
        for(var i=0; i<elementosFormu.length; i++){
            
             elementosFormu[i].selectedIndex = -1;
        }

// code for accessing each element goes here

    },

    eliminar() {
      for (var i = 0; i < this.listaDoctores.length; i++) {

        this.$store.dispatch('DELETE_HORARIO',this.listaDoctores[i])

      }
    },

    clickMedico(id){

      var index = -1;

      for (var i = 0; i < this.listaDoctores.length; i++) {
        if(this.listaDoctores[i] == id){
          index = i;
          break;
        }
      }

      if(index == -1){
        this.listaDoctores.push(id)
      }else{
        this.listaDoctores.splice(index,1)
      }

      console.log(this.listaDoctores)
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
