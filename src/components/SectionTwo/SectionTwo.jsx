import React from 'react'
import './seciontwo.css'

const URL_IMG = 'https://images.unsplash.com/photo-1513710239666-c29e2c09dc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'

function ItemFunction ({ imgs, title }) {
  return (
    <div className='two-flex-item'>
      <div className='two-overlay' />
      <img src={imgs} alt='' />
      <div className='two-img-title'>{title}</div>
      {/* <div className='two-bottom'>
        <h1>Nave Industrial</h1>
      </div> */}
    </div>
  )
}

export default function SectionTwo () {
  return (
    <div className='' id='proyectos'>
      <p className='two-title'>NUESTROS SERVICIOS</p>
      <p className='two-subtitle'>Suministro, Fabricación y Montaje de Estructuras Metálicas</p>
      <div className='two-container'>
        <ItemFunction imgs='https://metalconperu.com/imagenes/productos/estructuras-metalicas.jpg' title='Estructuras Metálicas' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/productos/andamios.jpg' title='Alquiler de andamios' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/productos/puertas-residenciales.jpg' title='Puertas residenciales' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/productos/puertas-industriales.jpg' title='Puertas industriales ' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/estructuras-metalicas/escaleras-metalicas-02.jpg' title='Carpintería metálica' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/productos/acero-inoxidable.jpg' title='Acero inoxidable' />
      </div>
    </div>
  )
}
