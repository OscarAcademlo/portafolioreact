import React from 'react'
import Footer from '../Shared/Footer'

const Portafolio = () => {
  return (
    
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
     
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="pokeApi.png" class="sliderimg d-block w-100" alt=""/>
        <div class="carousel-caption d-none d-md-block">
          <h5 class='poke__api'>Poke Api</h5>
          <p class='poke__api'>Proyecto realizado en la cursada de React en Academlo</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="appDelClima.png" class="sliderimg d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 class='poke__clima'>Aplicación del clima</h5>
          <p class='poke__clima'>Utiilizando la api del clima y realizando cálculos para conversion a Fahrenheit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="rickAndMorty.png" class="sliderimg d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 class='poke__rick'>Rick and Morty</h5>
          <p class='poke__rick'>Consumiendo api de Rick and Morty usando filtros y hook form.</p>
        </div>
      </div>
    </div>
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      
    </button>
   <Footer/>
  </div>
  
  )
}

export default Portafolio