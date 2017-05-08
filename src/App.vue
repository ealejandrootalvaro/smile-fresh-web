<template>
  

    
    
<div id="app">

<div class="container">

<header>
  
<div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
  <!-- Overlay -->
  <div class="overlay"></div>

  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#bs-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#bs-carousel" data-slide-to="1"></li>
    <li data-target="#bs-carousel" data-slide-to="2"></li>
  </ol>
  
  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item slides active">
      <div class="slide-1"></div>
      <div class="overlay"></div>
      <div class="hero">
        <hgroup>
            <h1>Smile Fresh</h1>        
            <h3>Opciones de financiamiento</h3>
        </hgroup>
        
      </div>
    </div>
    <div class="item slides">
      <div class="slide-2"></div>
      <div class="overlay"></div>
      <div class="hero">        
        <hgroup>
            <h1>Smile Fresh</h1>        
            <h3>Ortodoncia sin cuota inicial</h3>
        </hgroup>       
        
      </div>
    </div>
    <div class="item slides">
      <div class="slide-3"></div>
      <div class="overlay"></div>
      <div class="hero">        
        <hgroup>
            <h1>Smile Fresh</h1>        
            <h3>Pregunta por nuestros planes familiares</h3>
        </hgroup>
        
      </div>
    </div>
  </div> 
</div>


</header>
    
    






    <nav class="navbar navbar-inverse" style="font-family: 'Romanesco';font-size: 30px;">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" style="font-family: 'Romanesco';font-size: 30px;">Smile Fresh</a>
        </div>
        <ul class="nav navbar-nav">
          <li class=""><a href="#">Home</a></li>
          <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Doctores<span class="caret"></span></a>
            <ul class="dropdown-menu">

              <router-link to="/doctores" active-class="active" tag="li" exact><a href="#" style="font-family: 'Romanesco';font-size: 30px;">Listado</a></router-link>
              <router-link to="/horarios" active-class="active" tag="li" exact><a href="#" style="font-family: 'Romanesco';font-size: 30px;">Horarios</a></router-link>

            </ul>
          </li>
          <router-link to="/agendarcita" active-class="active" tag="li" exact><a href="#">Agendar Cita</a></li></router-link>
          <!-- <a href="#">Nueva Consulta</a></li> -->
          <router-link to="/nuevaconsulta" active-class="active" tag="li" exact><a href="#">Nueva Consulta</a></router-link>

          <router-link to="/ListadoPacientes" active-class="active" tag="li" exact><a href="#">Listado Pacientes</a></router-link>

           <router-link to="/HistoriaClinica" active-class="active" tag="li" exact><a href="#">Historia clinica </a></router-link>


           <router-link to="/Citas" active-class="active" tag="li" exact><a href="#">Citas</a></router-link>

           <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Listados por mes<span class="caret"></span></a>
            <ul class="dropdown-menu">

              <router-link to="/recaudado" active-class="active" tag="li" exact><a href="#" style="font-family: 'Romanesco';font-size: 30px;">Recaudado</a></router-link>
              <router-link to="/citasPorMes" active-class="active" tag="li" exact><a href="#" style="font-family: 'Romanesco';font-size: 30px;">Citas</a></router-link>

            </ul>
            </li>
        </ul>
        
      </div>
    </nav>


<body>
  


</body>




  </div>
    <router-view></router-view>
    <div class="margin-top: 100px; margin-bottom: 100px">

    </div>
  </div>
</template>

<script>

import moment from 'moment'



export default {



  name: 'app',
  mounted(){


    this.$store.dispatch('LOAD_DOCTORES');
    this.$store.dispatch('LOAD_HORARIOS');
    this.$store.dispatch('LOAD_CITAS');
    this.$store.dispatch("LOAD_PACIENTES")

  }
}
</script>

<style scoped>
#app {
  font-family: 'Romanesco';font-size: 22px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  margin-top: 60px;
}


p {
color: #000;
font-size: 40px;
font-family: 'Romanesco';font-size: 30px;
line-height: 24px;
letter-spacing: 2px;
margin-top: 15px;
}

h1 {
  font-weight: normal;
  font-family: 'Romanesco';font-size: 70px;
}

/*
Fade content bs-carousel with hero headers
Code snippet by maridlcrmn (Follow me on Twitter @maridlcrmn) for Bootsnipp.com
Image credits: unsplash.com
*/

/********************************/
/*       Fade Bs-carousel       */
/********************************/
.fade-carousel {
    position: relative;
    height: 300px;
}
.fade-carousel .carousel-inner .item {
    height: 300px;
}
.fade-carousel .carousel-indicators > li {
    margin: 0 2px;
    background-color: #f39c12;
    border-color: #f39c12;
    opacity: .7;
}
.fade-carousel .carousel-indicators > li.active {
  width: 10px;
  height: 10px;
  opacity: 1;
}

/********************************/
/*          Hero Headers        */
/********************************/
.hero {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 1px 1px 0 rgba(0,0,0,.75);
      -webkit-transform: translate3d(-50%,-50%,0);
         -moz-transform: translate3d(-50%,-50%,0);
          -ms-transform: translate3d(-50%,-50%,0);
           -o-transform: translate3d(-50%,-50%,0);
              transform: translate3d(-50%,-50%,0);
}
.hero h1 {
    font-size: 6em;    
    font-weight: bold;
    margin: 0;
    padding: 0;
}

.fade-carousel .carousel-inner .item .hero {
    opacity: 0;
    -webkit-transition: 2s all ease-in-out .1s;
       -moz-transition: 2s all ease-in-out .1s; 
        -ms-transition: 2s all ease-in-out .1s; 
         -o-transition: 2s all ease-in-out .1s; 
            transition: 2s all ease-in-out .1s; 
}
.fade-carousel .carousel-inner .item.active .hero {
    opacity: 1;
    -webkit-transition: 2s all ease-in-out .1s;
       -moz-transition: 2s all ease-in-out .1s; 
        -ms-transition: 2s all ease-in-out .1s; 
         -o-transition: 2s all ease-in-out .1s; 
            transition: 2s all ease-in-out .1s;    
}

/********************************/
/*            Overlay           */
/********************************/
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #080d15;
    opacity: .0;
}

/********************************/
/*          Custom Buttons      */
/********************************/
.btn.btn-lg {padding: 10px 40px;}
.btn.btn-hero,
.btn.btn-hero:hover,
.btn.btn-hero:focus {
    color: #f5f5f5;
    background-color: #1abc9c;
    border-color: #1abc9c;
    outline: none;
    margin: 20px auto;
}

/********************************/
/*       Slides backgrounds     */
/********************************/
.fade-carousel .slides .slide-1, 
.fade-carousel .slides .slide-2,
.fade-carousel .slides .slide-3 {
  height: 300px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.fade-carousel .slides .slide-1 {
  background-image: url(http://www.matizzclinicasodontologicas.com/images/tratamientos/odontologia_general.png); 
}
.fade-carousel .slides .slide-2 {
  background-image: url(https://www.dentioral.com/wp-content/uploads/2015/12/kit-de-ortodoncia-dentioral.jpg);
}
.fade-carousel .slides .slide-3 {
  background-image: url(http://eldiariodelanena.com/wp-content/uploads/2016/05/sitios-para-celebrar-a-mam%C3%A1-3.png);
}

/********************************/
/*          Media Queries       */
/********************************/
@media screen and (min-width: 980px){
    .hero { width: 980px; }    
}
@media screen and (max-width: 640px){
    .hero h1 { font-size: 4em; }    
}

</style>
