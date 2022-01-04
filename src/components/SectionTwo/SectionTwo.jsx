import React from 'react'
import './seciontwo.css'

const URL_IMG = 'https://images.unsplash.com/photo-1513710239666-c29e2c09dc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'

function ItemFunction ({ imgs }) {
  return (
    <div className='two-flex-item'>
      <div className='two-overlay' />
      <img src={imgs} alt='' />
      {/* <div className='two-img-title'>Nave Industrial</div> */}
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
        <ItemFunction imgs='https://metalconperu.com/imagenes/puertas-residenciales/puertas-seccionales-01.jpg' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/puertas-residenciales/puertas-levadizas02.jpg' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/estructuras-metalicas/barandas-y-pasamanos-01.jpg' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/estructuras-metalicas/naves-industriales-02.jpg' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/estructuras-metalicas/escaleras-metalicas-02.jpg' />
        <ItemFunction imgs='https://metalconperu.com/imagenes/estructuras-metalicas/escaleras-metalicas-01.jpg' />
      </div>
    </div>
  )
}
