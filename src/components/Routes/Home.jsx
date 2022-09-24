import React from 'react'
import Footer from '../Shared/Footer'

const Home = () => {
  return (
    <div className='container__home'>
        <h2 className='home'>Me llamo Oscar Nicolas Stella</h2>
        <div className='home__img'>
            
            <img className='home__img-center' src="/yo.png" alt="mi-imagen" />
        
        </div>
        
        <h3 className='home__texto'>Realice estudios en Educacion IT donde obtuve una aproximacion al lenguaje Java, luego comence estudios en Academlo con el objetivo de llegar a ser programador Fullstack aprendiendo tecnologias como JavaScript, React y Node js, incluyendo html y css.Estoy dispuesto a aportar justo lo que estan buscando </h3>
        
        <Footer/>
    </div>
    
  )
}

export default Home