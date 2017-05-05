
import axios from 'axios'

export const addEmail = ({ dispatch }) => {
  dispatch('ADD_EMAIL')
}

export const setDoctores = ({commit},doctores) => {
  
    axios.get('localhost:3888/data/doctor').then(function (response){
      console.log("Actions")
      console.log(response)
      commit('SET_DOCTORES',response)
    })
    .catch(function(response)){
      console.log("Actions error");
      console.log(response)
    }

}

export const updateActiveEmail = ({ dispatch }, email) => {
  dispatch('SET_ACTIVE_EMAIL', email)
}
