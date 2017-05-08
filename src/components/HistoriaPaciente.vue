<template lang="html">

  <div class="" style="text-align: left; padding-left: 110px">
    <div class="" v-for="historia in historias">
      <h2>Fecha: {{historia.fecha}}</h2>
      <p>Paciente: {{historia.paciente}}</p>
      <h3>Descripcion: </h3>
      <p>{{historia.descripcion}}</p>
      <h3>Diagnostico:</h3>
      <p>{{historia.diagnostico}}</p>
      <hr>
    </div>
  </div>

</template>

<script>

import axios from "axios"

export default {
  data(){
    return {
      historias: []
    }
  },

  mounted(){
    console.log(this.$route.params.id)
    axios.get("http://localhost:3888/api/historia/paciente/"+this.$route.params.id).then((response) => {
      console.log(response.data)
      this.historias = response.data
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="css">
</style>
