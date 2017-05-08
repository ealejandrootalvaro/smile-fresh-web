import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuex)

const state = {
   pacientes: [

   ],

  doctores: [],

  consultas:[

  ],

  citas:[
  {id:25,fecha:"2017-03-02" ,hora:"59:40", doctor:"1", paciente:"pedrito", duracion:"30", valor:"500" ,estado:"Finalizada"},
  {id:26,fecha:"2017-03-01" ,hora:"59:40", doctor:"1", paciente:"pedrito", duracion:"30", valor:"500" ,estado:"Finalizada"}
  ],

  historias: [ {fecha:"2017-03-02",doctor:"40",paciente: "73",descripcion:"el chico llega con extrema verguenza  cubriendose el pecho al parecer un golpe cortopunzate por parte de su pareja la causa",diagnostico:"hemorrgia en el pezon"}],

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


  },

  ADD_CONSULTA(state,consulta){
    state.consultas.push(consulta);
  },

  ADD_CITA(state,cita){
    state.citas.push(cita);
  },

  SET_DOCTORES(state,doctores){
    state.doctores = doctores
  },

  /* OPERACIONES CITAS */

  SET_CITAS(state,citas){
    state.citas = citas
  },

  EDIT_CITA(state,cita){
    var index = -1;
    for (var i = 0; i < state.citas.length; i++) {
        if(cita.idCita == state.citas[i].idCita){
          index = i;
          break;
        }
    }

    if(index != -1){
      state.citas[index].paciente = cita.paciente;
      state.citas[index].estado = cita.estado;
    }
  },

  /* OPERACIONES HISTORIA */

  SET_HISTORIAS(state,historias){
    state.historias = historias;
  },

  ADD_HISTORIA(state,historia){
    state.historias.push(historia);
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
  },

  ADD_PACIENTE(state,paciente){
    state.pacientes.push(paciente)
  },

  DELETE_PACIENTE(state,id){
    var index =-1;
    for (var i = 0; i < state.pacientes.length; i++) {
      if(state.pacientes[i].id == id){
        index = i;
        break;
      }
    }

    if(index != -1){
      state.pacientes.splice(index,1)
    }
  },

  SET_PACIENTES(state,pacientes){
    console.log(pacientes)
    state.pacientes = pacientes
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

  ADD_PACIENTE: function({commit}, paciente){
    axios.post('http://localhost:3888/api/paciente',paciente).then((response)=>{
      paciente.id = response.data
      commit('ADD_PACIENTE',paciente)
    }, (err) => {
      console.log(err)
    })
  },


  DELETE_PACIENTE: function({commit}, paciente){
    axios.delete('http://localhost:3888/api/paciente/'+paciente).then((response)=>{
      commit("DELETE_PACIENTE",paciente)
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

  ASIGNAR_CITA: function({commit},data){
    var cita = data.cita
    cita.paciente = data.paciente
    cita.estado = data.estado
    axios.put("http://localhost:3888/api/cita/"+cita.idCita+"/paciente/"+cita.paciente,cita).then((response)=>{
      commit('EDIT_CITA',cita)
    }, (err) => {
      console.log()
    })
  },

  LOAD_HISTORIAS: function({commit}){
    axios.get('http://localhost:3888/api/historia').then((response)=>{
      commit('SET_HISTORIAS',response.data)
    }, (err) => {
      console.log(err)
    })
  },

  ADD_HISTORIA: function({commit},historia){
    axios.get("http://localhost:3888/api/historia").then((response)=>{
      historia.id = response.data.id
      commit('ADD_HISTORIA',historia)
    }, (err)=>{
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

    var dias = {Lunes: 1, Martes: 2, Miercoles: 3, Jueves: 4, Viernes: 5, Sabado: 6, Domingo: 0}
    var currentDate = moment()
    var fecha = moment().day(dias[horario.dia]);
    axios.post('http://localhost:3888/api/horario',horario).then((response)=>{
      horario.idHorario = response.data.id
      horario.nombre = response.data.nombre
      horario.apellido = response.data.apellido
      var i=0;
      for (var i = 0; i < 30; i++) {
        if(i!=0){
          fecha = fecha.add(7,"days");
        }
        (function(date){

          console.log(date)
          var cita = {nombre: response.data.nombre, apellido: response.data.apellido, estado: "Disponible",fecha: date.format("MM-DD-YYYY"), hora: horario.inicio, duracion: "30", doctor: horario.doctor}
          axios.post('http://localhost:3888/api/cita',cita).then((response)=>{

            cita.idCita = response.data.id;
            commit('ADD_CITA',cita);

          }, (err) => {
            console.log(err)
          })
        }(fecha))
      }
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
