<template>
  <div class="container">
    <h2 class="text" >Registro de una consulta actual.</h2>
    
    
    
                  <form role="form" id="formz" style="text-align: left;">
                  
                       <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th></th>
          
          </tr>
        </thead> 
         <tbody class="text-left" >
        <tr v-for="paciente in pacientes">
          <td >{{paciente.nombre}}</td>
          <td >{{paciente.apellido}}</td>
         
          <td ><input type="checkbox" name="seleccionar" value="Selecionar"></td>
        </tr>
      </tbody>
    </table>

                           <div class="form-group">
                          <label for="entradaPago">Seleccione la fecha.</label>  
                         <input  type="date" class="form-control"
                           id="fechaConsulta" placeholder="Ingrese su nombre." v-model="nuevaFecha"style="width: 200px; "/>              
                          </div>




                           <div class="form-group">
                          <label for="entradaPago">Ingrese el nombre del medico que atiende.</label>  
                         <input  type="text" class="form-control"
                           id="entradanombreMed" placeholder="Ingrese su nombre." v-model="nuevoNameMedico"style="width: 200px; "/>              
                          </div>


                           <div class="form-group">
                               <label for="entradaHallazgos">Describa los hallazgos en esta consulta :</label> 
                               <br>                  
                               <textarea id="entradaHallazgos" placeholder="Hallazgos" rows="10" cols="90" v-model="hallazgos"></textarea>
                           
                           </div>



                          <div class="form-group">
                          <label for="entradaPago">Ingrese el cobro que se le debe hacer a la persona por esta consulta:</label>  
                         <input  type="text" class="form-control"
                           id="entradaPago" placeholder="Ingrese el valor en COP" v-model="nuevoPago"style="width: 200px; "/>              
                          </div>
                          <button @click="addConsulta" class="btn btn-primary black-background white">

                             Registrar Consulta
                          </button>













                </form>
   
    

  </div>
</template>

<script>



export default {
  
  data () {
    return {
      
    }
  },
  
  computed: {
    consultas(){
      return this.$store.state.consultas
    }
    
  },
  methods:{
    addConsulta(){
      //alert('adding name');
      this.$store.commit('ADD_CONSULTA',{cedula_paciente: this.nuevaFecha, fecha: this.nuevaFecha,nom_med: this.nuevoNameMedico,hallazgos: this.hallazgos,cobro: this.nuevoPago});     
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 40px;
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


label,input,textarea,button{

   font-size: 25px;
}

.black-background {background-color:#4d4d4d;}
.white {color:#ffffff;}
</style>
