<template>
  <div class="container" v-show="cita">
    <h2 class="text" >Registro de la consulta {{$route.params.id}}</h2>
      <div class="form-group">
        <label for="">Paciente: </label><span> {{cita.nombrePaciente + " " + cita.apellidoPaciente}}</span>
      </div>

      <div class="form-group">
        <label for="entradaPago">Fecha: </label>
        <span>{{cita.fecha}}</span>
      </div>




      <div class="form-group">
        <label for="entradaPago">Medico: </label>
        <span>{{cita.nombreDoctor}}</span>
      </div>


      <div class="form-group">
        <label for="">Describa el motivo de la consulta y el estado del paciente: </label>
        <br>
        <textarea name="name" class="form-control" v-model="descripcion"></textarea>
      </div>

      <div class="form-group">
        <label for="entradaHallazgos">Ingrese el diagnostico</label>
        <br>
        <textarea id="entradaHallazgos" class="form-control" placeholder="Hallazgos"  v-model="diagnostico"></textarea>
      </div>



      <div class="form-group">
        <label for="entradaPago">Ingrese el cobro que se le debe hacer a la persona por esta consulta:</label>
        <input  type="text" class="form-control"
        id="entradaPago" placeholder="Ingrese el valor en COP" v-model="nuevoPago"style="width: 200px; "/>
      </div>
      <button @click="finalizarConsulta" class="btn btn-primary black-background white">

        Finalizar consulta
      </button>

  </div>
</template>

<script>

import axios from 'axios'


export default {

  data () {
    return {
      cita: {},
      descripcion: '',
      diagnostico: '',
      nuevoPago: ''
    }
  },

  mounted(){
    console.log("holaaaaaa")
    axios.get("http://localhost:3888/api/cita/"+this.$route.params.id).then((response)=>{
      console.log(response.data)
      this.cita = response.data
    }, (err)=>{
      console.log(err)
    })
  },

  computed: {
    consultas(){
      return this.$store.state.consultas
    }

  },
  methods:{
    finalizarConsulta(){
      if(this.descripcion == "" && this.diagnostico == ""){
        alert("Ingrese los campos obligatorios")
        return
      }else{
        this.$store.dispatch('FINALIZAR_CITA',{idCita: this.$route.params.id,descripcion: this.descripcion, diagnostico: this.diagnostico, doctor: this.cita.idDoctor, paciente: this.cita.idDoctor, fecha: this.cita.fecha})
      }
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
