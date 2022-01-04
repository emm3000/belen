import React from 'react'
import './sectionone.css'

export default function SectionOne () {
  return (
    <div className='one-container' id='inicio'>
      <ul>
        <li><img src='https://images.unsplash.com/photo-1513710239666-c29e2c09dc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80' alt='' /></li>
        <li><img src='https://images.unsplash.com/photo-1585201731775-0597e1be4bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80' alt='' /></li>
        <li><img src='https://images.unsplash.com/photo-1551457812-ce1f54d16ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' /></li>
        <li><img src='https://images.unsplash.com/photo-1619109611242-4a953eb2a215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80' alt='' /></li>
      </ul>
      <div className='one-content'>
        <div className='one-content-labels'>
          <p>Estructuras Metálicas</p>
          <p>Alquiler de andamios</p>
          <p>Puertas seccionales</p>
          <p>Puertas industriales</p>
          <p>Carpintería metálica</p>
          <p>Acero inoxidable</p>
        </div>
        <div className='one-content-form'>
          <form>
            <h2>SOLICITA TU COTIZACIÓN</h2>
            <input type='text' placeholder='Nombre' />
            <input type='text' placeholder='Teléfonos' />
            <input type='text' placeholder='Correo' />
            <div className='one-content-button'>Solicitar cotización</div>
          </form>
        </div>
      </div>
    </div>
  )
}
