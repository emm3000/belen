import React from 'react'
import FacebookIcon from '../../iconComponents/FacebookIcon'
import './footer.css'

export default function Footer () {
  return (
    <footer className='colorBackground'>
      <div className='footerContainer'>
        <article className='articleFirst'>
          <h2>METALCORD</h2>
          <p>
            Metalconperu, Brindamos soluciones integrales e innovadoras, a
            través de sus diferentes líneas de productos y servicios
          </p>
          <a href='#'>MAS INFO</a>
        </article>

        <article className='articleSecond'>
          <h2>LINEAS DE PRODUCTOS</h2>
          <ul>
            <li>Estructuras Metálicas</li>
            <li>Estructuras Metálicas</li>
            <li>Estructuras Metálicas</li>
            <li>Estructuras Metálicas</li>
          </ul>
        </article>

        <article className='articleThird'>
          <h2>DATOS DE CONTACTO</h2>
          <ul>
            <li><FacebookIcon width={40} /><span>Av:Guardia Civil Sur Mz B Lt 41-Segundo Piso - surco</span></li>
            <li><FacebookIcon width={40} /><span>Av:Guardia Civil Sur Mz B Lt 41-Segundo Piso - surco</span></li>
            <li><FacebookIcon width={40} /><span>Av:Guardia Civil Sur Mz B Lt 41-Segundo Piso - surco</span></li>
          </ul>
        </article>
      </div>
    </footer>
  )
}
