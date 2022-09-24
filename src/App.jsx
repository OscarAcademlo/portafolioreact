import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import AcercaDeMi from './components/Routes/AcercaDeMi'
import Home from './components/Routes/Home'
import Portafolio from './components/Routes/Portafolio'
import Contacto from './components/Routes/Contacto'
import  "./components/styles/home.css"
import  "./components/styles/contacto.css"
import  "./components/styles/portafolio.css"
import "./components/styles/acercaDeMi.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
  

      <Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/aboutme' element= {<AcercaDeMi/>}/>
  <Route path='/portafolio' element= {<Portafolio/>}/>
  <Route path='/contacto' element= {<Contacto/>}/>

      </Routes> 
      
    </div>
)
}
export default App
