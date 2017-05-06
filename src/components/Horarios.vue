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
            <td >{{medico.nombre}}</td>
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

              <div class="form-group" v-show="doctor">
                <label for="">Horario</label>

                <select class="form-control" v-model="horario">
                  <option v-bind:value="item" v-for="item in disponibles">{{item.inicio +" - "+ item.fin}}</option>
                </select>
              </div>


              <!-- <div class="form-group">
              <label for="horaSalida">Hora de Salida</label>
              <input id="horaSalida" placeholder="Ingrese la hora de salida." type="time" class="form-control" name="" value="" v-model="nuevaHoraS">
            </div>
          -->






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
      dia:'',
      schedules: [ {id: 1, inicio: "8:00 am.",fin: "8:30 am."}, {id: 2,inicio: "8:30 am.", fin: "9:00 am."}, {id: 3, inicio: "9:00 am.",fin: "9:30 am."}, {id: 4,inicio: "9:30 am.", fin: "10:00 am."}, {id: 5, inicio: "10:00 am.",fin: "10:30 am."}, {id: 6,inicio: "10:30 am.", fin: "11:00 am."}],
      horario: {}

    }
  },

  computed: {
    horarios(){
      console.log(this.$store.state.horarios)
      return this.$store.state.horarios
    },

    doctores(){
      return this.$store.state.doctores
    },

    disponibles(){
      console.log("disponibles")

      return this.schedules.filter(function(item){
        var bandera = true;
        var doctor = this.doctor
        var dia = this.dia
        for (var i = 0; i < this.horarios.length; i++) {
          var horarioItem = this.horarios[i]

          if(dia == horarioItem.dia && horarioItem.doctor == doctor && horarioItem.inicio == item.inicio && horarioItem.fin == item.fin){

            bandera = false;
            break;
          }
        }
        return bandera
      }.bind(this))
    }
  },

  mounted(){
    console.log("hola");
    $('#timepicker1').timepicker();
  },

  methods:{
    addHorario(){
      if( this.doctor && this.horario && this.dia){
        this.$store.dispatch('ADD_HORARIO',{doctor: this.doctor, dia: this.dia, inicio: this.horario.inicio, fin: this.horario.fin});
        this.doctor = ""
        this.dia = ""
        this.horario = {}
      }else{
        alert("Ingrese todos los campos requeridos")
      }
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
