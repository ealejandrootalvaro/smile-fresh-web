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
                <h4 class="modal-title" style="font-family: 'Times New Roman';font-size: 40px;" >Ingresar Nuevo Paciente</h4>

              </div>

              <div class="modal-body">
                 <h5 class="text-left" style="font-family: 'Times New Roman';font-size: 20px;">Ingrese la siguiente informacion referente al registro de un nuevo Paciente.</h5>


                 <form role="form" id="myForm" >
                   <div class="form-group">
                     <label for="entradaNombres">Nombres</label>
                     <input type="nombres" class="form-control"
                     id="entradaNombres" placeholder="Ingrese los Nombres" v-model="nuevoName" />
                   </div>
                   <div class="form-group">
                     <label for="entradaApellidos">Apellidos</label>
                     <input type="apellidos" class="form-control"
                     id="entradaApellidos" placeholder="Ingrese los Apellidos" v-model="nuevoApellido"/>
                   </div>
                   <div class="form-group">
                     <label for="entradaEmail">Email</label>
                     <input type="email" class="form-control"
                     id="entradaEmail" placeholder="Ingrese el Email" v-model="nuevoEmail"/>
                   </div>




                   <div class="form-group">
                     <label for="entradaNombres">Direccion</label>
                     <input type="direccion" class="form-control"
                     id="entradaDireccion" placeholder="Ingrese la direccion de contacto" v-model="nuevaDireccion"/>
                   </div>

                   <div class="form-group">
                     <label for="entradaTelefono">Telefono</label>
                     <input type="telefono" class="form-control"
                     id="entradaTelefono" placeholder="Ingrese el telefono" v-model="nuevoTelefono"/>
                   </div>

                   <div class="form-group">
                     <label for="entradaOcupacion">Ocupacion</label>
                     <input type="ocupacion" class="form-control"
                     id="entradaOcupacion" placeholder="Ingrese la ocupacion " v-model="nuevaOcupacion"/>
                   </div>

                   <div class="form-group">
                     <label for="entradaFechNacimi">Fecha de Nacimiento</label>
                     <input type="fechadenacimiento" class="form-control"
                     id="entradaFechNacimi" placeholder="(dd/mm/aaaa)" v-model="nuevaFechaNaci"/>
                   </div>

                   <div class="form-group">
                     <label for="entradaEdad">Edad</label>
                     <input type="edad" class="form-control"
                     id="entradaEdad" placeholder="Ingrese la edad" v-model="nuevaEdad"/>
                   </div>

                   <div class="form-group">
                     <label for="entradaGenero">Genero</label>
                     <input type="genero" class="form-control"
                     id="entradaGenero" placeholder="M ó F" v-model="nuevoGenero"/>
                   </div>



                   <input type="reset" value="Limpiar Campos" class="btn btn-primary black-background white" >

                     
                 </form>

              </div>
              <div class="modal-footer">

                <button type="button" class="btn btn-primary black-background white"
                        data-dismiss="modal">
                            Cerrar
                </button>
                <button @click="addPaciente" class="btn btn-primary black-background white">  Aceptar</button>


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
       nuevoName:'',
       nuevoApellido:'',
       nuevoEmail:'',
       nuevaDireccion:'',
       nuevoTelefono:'',
       nuevaOcupacion:'',
       nuevaFechaNaci:'',
       nuevaEdad: '',
       nuevoGenero: ''

    }
  },

  computed: {
    pacientes(){
      return this.$store.state.pacientes
    }
  },

 methods:{

   addPaciente(){
     var numeros = /^[0-9]+$/;
     var letras = /^[A-Za-z\s]+$/;
      if(this.nuevoName  == "" || this.nuevoApellido == "" || this.nuevoEmail == "" || this.nuevaDireccion == "" || this.nuevoTelefono == "" || this.nuevaOcupacion == "" || this.nuevaFechaNaci == "" || this.nuevaEdad == "" || this.nuevoGenero == ""  ){

          alert('Asegurese de llenar todos los campos del formulario.');
          $('#modal1').modal('show');
      }else{



          if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.nuevoEmail))

          {



                    if(this.nuevoTelefono.match(numeros) && this.nuevaEdad.match(numeros) ){

                        if(this.nuevoName.match(letras) && this.nuevoApellido.match(letras) && this.nuevaOcupacion.match(letras) && this.nuevoGenero.match(letras) ){

                            this.$store.dispatch('ADD_PACIENTE',{nombre: this.nuevoName,apellido: this.nuevoApellido,email: this.nuevoEmail,direccion: this.nuevaDireccion ,telefono: this.nuevoTelefono,ocupacion: this.nuevaOcupacion, nacimiento: this.nuevaFechaNaci, edad: this.nuevaEdad, genero: this.nuevoGenero});
                         $('#modal1').modal('hide');


                        }else{
                           alert('Verifique los campos de nombre, apellido, ocupacion y genero. Deben ser unicamente letras.');
                           $('#modal1').modal('show');

                        }

                    }else{

                           alert('Verifique los campos de telefono y edad, deben ser numericos.');
                           $('#modal1').modal('show');

                    }










          }else{


            alert('El email ingresado no es valido');
            $('#modal1').modal('show');
          }


      }

   },

   clickPaciente(id){
     var index = -1;

     for (var i = 0; i < this.listaPacientes.length; i++) {
       if(this.listaPacientes[i] == id){
         index = i;
         break;
       }
     }

     if(index == -1){
       this.listaPacientes.push(id)
     }else{
       this.splice(index,1)
     }
   },

   eliminar(){

     for (var i = 0; i < this.listaDoctores.length; i++) {

       this.$store.dispatch("DELETE_PACIENTE",this.listaPacientes[i])

     }


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


label,input,textarea,button{

   font-size: 20px;
}

</style>
