import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {

  doctores: [],
  consultas:[
    {cedula_paciente:"123",nom_med:"",hallazgos:"",cobro:"", title: "Consulta paciente 123"}
  ],
  citas:[
    {cedula_paciente:"123",start:"2017-04-27",nom_med:"",title: "Cita paciente 123"}
  ],
  historias: [],
  horarios: []
}

const getters = {

}

// define the possible mutations that can be applied to our state
const mutations = {

  /* OPERACIONES DOCTORES */
  EDIT_DOCTOR (state, nombre, doctor){
    //Buscar el doctor con id tal
    var index;
    for (var i = 0; i < state.doctores.length; i++){
      if(state.doctores[i].nombre == nombre){
        index = i;
        break;
      }
    }
    state.doctores[index] = doctor;

  },

  ADD_DOCTOR (state,doctor){
    // only mutators can mutate the state
    state.doctores.push(doctor);
  },

  DELETE_DOCTOR (state,id){
    console.log("antes")
    console.log(state.doctores)
    var index =-1;
    for (var i = 0; i < state.doctores.length; i++) {
      if(state.doctores[i].id == id){
        index = i;
        break;
      }
    }

    if(index != -1){
      state.doctores.splice(index,1)
    }

    console.log("despues")
    console.log(state.doctores)
  },

  ADD_CONSULTA(state,consulta){
    state.consultas.push(consulta);
  },

  ADD_CITA(state,cita){
    state.consultas.push(cita);
  },

  SET_DOCTORES(state,doctores){
    state.doctores = doctores
  },

  /* OPERACIONES CITAS */

  SET_CITAS(state,citas){
    state.citas = citas
  },

  /* OPERACIONES HISTORIA */

  SET_HISTORIAS(state,historias){
    state.historias = historias;
  },

  /* OPERACIONES HORARIO */

  SET_HORARIOS(state,horarios){
    state.horarios = horarios
  },

  ADD_HORARIO(state,horario){
    state.horarios.push(horario)
  },

  DELETE_HORARIO(state,id){
    var index =-1;
    for (var i = 0; i < state.horarios.length; i++) {
      if(state.horarios[i].idHorario == id){
        index = i;
        break;
      }
    }

    if(index != -1){
      state.horarios.splice(index,1)
    }
  }

}

const actions = {

  ADD_DOCTOR: function({commit},doctor){
    axios.post('http://localhost:3888/api/doctor',doctor).then((response)=>{
      console.log(response.data)
      doctor.id = response.data.id
      commit('ADD_DOCTOR',doctor)
    }, (err)=>{
      console.log(err)
    })
  },

  LOAD_DOCTORES: function({commit}){
    axios.get('http://localhost:3888/api/doctor').then((response)=>{
      console.log(response.data)
      commit('SET_DOCTORES',response.data)
    }, (err) => {
      console.log(err)
    })
  },

  DELETE_DOCTOR: function({commit},hola){
    var newId = hola;
    console.log("antes axios")
    axios.delete('http://localhost:3888/api/doctor/'+newId).then((response)=>{
      console.log("voy a llamar el commit")
      commit('DELETE_DOCTOR',newId)
    }, (err)=>{
      console.log(err)
    })
  },



  LOAD_PACIENTES: function({commit}){
    axios.get('http://localhost:3888/api/paciente').then((response)=>{
      commit('SET_PACIENTES',response.data)
    }, (err) => {
      console.log(err)
    })
  },

  LOAD_CITAS: function({commit}){
    axios.get('http://localhost:3888/api/cita').then((response)=>{
      commit('SET_CITAS',response.data)
    }, (err) => {
      console.log(err)
    })
  },

  LOAD_HISTORIAS: function({commit}){
    axios.get('http://localhost:3888/api/historia').then((response)=>{
      commit('SET_HISTORIAS',response.data)
    }, (err) => {
      console.log(err)
    })
  },

  LOAD_HORARIOS: function({commit}){
    axios.get('http://localhost:3888/api/horario').then((response)=>{
      commit('SET_HORARIOS',response.data)
    }, (err) => {
      console.log(err)
    })
  },

  ADD_HORARIO: function({commit},horario){
    axios.post('http://localhost:3888/api/horario',horario).then((response)=>{
      horario.idHorario = response.data.id
      horario.nombre = response.data.nombre
      horario.apellido = response.data.apellido
      commit('ADD_HORARIO',horario)
    }, (err) => {
      console.log(err)
    })
  },

  DELETE_HORARIO: function({commit},id){
    console.log("Antes axios")
    axios.delete('http://localhost:3888/api/horario/'+id).then((response)=>{
      console.log("response axios")
      commit('DELETE_HORARIO',id)
    }, (err) => {
      console.log(err)
    })
  }

}


// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
