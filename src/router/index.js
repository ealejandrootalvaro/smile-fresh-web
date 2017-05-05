import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Horarios from '@/components/Horarios'
import NuevaConsulta from '@/components/NuevaConsulta'
import AgendarCita from '@/components/AgendarCita'
import Doctores from '@/components/Doctores'
import ListadoPacientes from '@/components/ListadoPacientes'
import Citas from '@/components/Citas'
import CitasPorMes from '@/components/CitasPorMes'
import Recaudado from '@/components/Recaudado'



import HistoriaClinica from '@/components/HistoriaClinica'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
    	path: '/horarios',
        component: Horarios
    },

    {

      path:'/nuevaconsulta',
      component: NuevaConsulta

    },

    {
        path:'/agendarcita',
      component: AgendarCita




    }
    ,{
        path:'/doctores',
      component: Doctores




    },

    {

      path:'/ListadoPacientes',
      component: ListadoPacientes

    },

    {
        path:'/Citas',
      component: Citas




    },

    {
        path:'/HistoriaClinica',
      component: HistoriaClinica




    }
  ,{
        path:'/recaudado',
      component: Recaudado


      }
 ,{
        path:'/citasPorMes',
      component: CitasPorMes


      }

  ]
})
