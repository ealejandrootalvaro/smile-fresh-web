<template>
  <div class="container">
    <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Direccion</th>
            <th>Telefono</th>
            <th>Ocupacion</th>
            <th>Fecha de nacimiento</th>
            <th>Edad</th>
            <th>Genero</th>
            <th>Historia</th>
            <th>Eliminar</th>
          </tr>
        </thead> 
         <tbody class="text-left" >
        <tr v-for="paciente in pacientes">
          <td >{{paciente.id+ " " +paciente.nombre}}</td>
          <td >{{paciente.apellido}}</td>
          <td >{{paciente.direcion}}</td>
          <td >{{paciente.telefono}}</td>
          <td >{{paciente.ocupacion}}</td>
          <td >{{paciente.nacimiento}}</td>
          <td >{{paciente.edad}}</td>
          <td >{{paciente.genero}}</td>
          <td ></td>
          <td ><input  v-on:click="clickPaciente(paciente.id)" type="checkbox" name="eliminar" value="eliminar"></td>
        </tr>
      </tbody>
    </table>
    

      <button href="#modal1" class="btn btn-primary black-background white" data-toggle="modal">Nuevo Paciente</button>

      <button  @click="eliminar" class="btn btn-primary black-background white" >Eliminar los Pacientes seleccionados</button>

         <div class="modal fade" id="modal1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                       <span aria-hidden="true">&times;</span>
                       <span class="sr-only">Close</span>
                </button>
                <h4 class="modal-title">Ingresar Nuevo Paciente</h4>

              </div>

              <div class="modal-body">
                 <h5 class="text-left" >Ingrese la siguiente informacion referente al registro de un nuevo Paciente.</h5>

                 
                  <form role="form" id="myForm">
                  <div class="form-group">
                    <label for="Nombres">Nombres</label>
                    <input type="nombres" class="form-control"id="Nombres" placeholder="Ingrese los Nombres" v-model="name"/>
                  </div>

                   <div class="form-group">
                    <label for="Apellidos">Apellidos</label>
                    <input type="apellidos" class="form-control" id="Apellidos" placeholder="Ingrese los Apellidos" v-model="apellido"/>
                  </div>

                  <div class="form-group">
                    <label for="Direccion">Direccion</label>
                    <input type="direccion" class="form-control" id="Direccion" placeholder="Ingrese la direccion del paciente" v-model="direccion">
                  </div>

                  <div class="form-group">
                    <label for="telefono">Telefono</label>
                    <input type="telefono" class="form-control"
                    id="telefono" placeholder="Ingrese el telefono" v-model="telefono"/>
                  </div>

                  <div class="form-group">
                    <label for="ocupacion">Ocupacion</label>
                    <input type="ocupacion" class="form-control"
                    id="ocupacion" placeholder="Ingrese la ocupacion " v-model="ocupacion"/>
                  </div>

                  <div class="form-group">
                    <label for="fechaNacimiento">Fecha de Nacimiento</label>
                    <input type="fechadenacimiento" class="form-control"
                    id="fechaNacimiento" placeholder="Ingrese la fecha de nacimiento" v-model="fechaNacimiento"/>
                  </div>

                  <div class="form-group">
                    <label for="edad">Edad</label>
                    <input type="edad" class="form-control"
                    id="edad" placeholder="Ingrese la edad" v-model="edad"/>
                  </div>

                  <div class="form-group">
                    <label for="genero">Genero</label>
                    <input type="genero" class="form-control"
                    id="genero" placeholder="Ingrese el genero" v-model="genero"/>
                  </div>
                      
      
                  <input type="reset" value="Limpiar Campos" class="btn btn-primary black-background white" >


                </form>

              </div>
              <div class="modal-footer">

                <button type="button" class="btn btn-primary black-background white"
                        data-dismiss="modal">
                            Cerrar
                </button>
                <button @click="" class="btn btn-primary black-background white">  Aceptar</button>


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
       listaPacientes:[],
       nombre:'',
       apellido:'',
       direcion:'',
       telefono:'',
       ocupacion:'',
       nacimiento:'',
       edad:'',
       genero:''
       

    }
  },

  computed: {
    pacientes(){
      return this.$store.state.pacientes
    }
  },

 methods:{

        //listarPacientes(){

 //   },
        

       /* clickPaciente(id){

      var index = -1;

      for (var i = 0; i < this.names.length; i++) {
        if(this.names[i] == id){
          index = i;
          break;
        }
      }

      if(index == -1){
        this.names.push(id)
      }else{
        this.names.splice(index,1)
      }

      console.log(this.names)
    }*/

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
