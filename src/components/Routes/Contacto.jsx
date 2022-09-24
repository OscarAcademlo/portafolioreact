import React from 'react'
import { useForm} from 'react-hook-form'
import Footer from '../Shared/Footer'
import emailjs from '@emailjs/browser'


const defaultValue={
  name:'',
  email:'',
  asunto:'',
  messege:''
}

const Contacto = (link) => {

const {register,handleSubmit,reset}=useForm()

  const submit=(data)=>{
   emailjs.sendForm('service_cc73rx8','template_rl0quye',event.target,'SjUdChf7QTw5O2uwT')
   
    .then(res => console.log(res.data))
    .catch (err => console.log(err))
    reset(defaultValue)
    console.log(data);
  }




  return (

    
   
      <div className="contacto__container">
        

        <h2>Ya estoy listo para unirme a tu equipo contactame</h2>

      <h3>Estas son mis redes sociales</h3>


      <div className="contacto__redes">
        <div className="contacto__facebook">
        
        <a href="https://www.facebook.com/oscar.stella/" target="_blank"><img src="facebook-square-logo-24.png" alt="" /></a>
        
      </div>
      <a href="https://www.instagram.com/nicolasbariloche/" target="_blank"><img src="instagram-alt-logo-24.png" alt="" /></a>
      <div className="contacto__twitter">
      <a href="https://twitter.com/nicobariloche" target="_blank"><img src="twitter-logo-24.png" alt="" /></a>
      </div>
     </div>

<h2>Envíame un Email</h2>
        <form className='contacto__form' onSubmit={handleSubmit(submit)}>
      <ul>
    <li>
      <label className='contacto__label' htmlFor='name'>Nombre: </label>
      <input {...register("name", {required:true})} name='name' type="text" id='name'/></li>
    <li>
    <label className='contacto__label' htmlFor='email'>Email: </label>
      <input {...register("email")} name='email' type="email" id='email'/></li>
    <li>
    <label className='contacto__label' htmlFor='asunto'>Asunto: </label>
      <input {...register("asunto")} name='asunto' type="text" id='asunto'/></li>
    <li>
    <label className='contacto__label' htmlFor='messege'>Mensaje: </label>
      <textarea cols='80' rows='4' {...register("messege")} name='messege' id='messege'></textarea></li>
      </ul>
      <button className='contacto__button' type='submit'>Enviar</button>

        </form>
       
     


    <Footer/>
  </div>
    )
}

export default Contacto