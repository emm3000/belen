import React from 'react'
import EmailIcon from '../../iconComponents/Email'
import PhoneIcon from '../../iconComponents/PhoneIcon'
import LocationIcon from '../../iconComponents/LocationIcon'
import './sectionthree.css'

export default function SectionThree () {
  return (
    <div id='contactos'>
      <h1 className='th-title'>Contacto</h1>
      <div className='th-flex-container'>
        <div className='th-item one-item'>
          <h2>TELÉFONOS:</h2>
          <ul>
            <li>
              <PhoneIcon width={35} />
              <p>(054) 780400</p>
            </li>
            <li>
              <PhoneIcon width={35} />
              <p> 959 602 815</p>
            </li>
            <li>
              <PhoneIcon width={35} />
              <p> 964157514</p>
            </li>
          </ul>
          <h2>EMAIL:</h2>
          <div className='th-email'>
            <EmailIcon width={40} />
            <p>metalcord@gmail.com</p>
          </div>
          <h2>DIRECCIÓN:</h2>
          <div className='th-email'>
            <LocationIcon width={40} />
            <p>Calle Pedro Diaz Canseco #307 San Juan de Dios Hunter </p>
          </div>
        </div>
        <div className='th-item two-item'>
          <form>
            <h2>SOLICITA TU COTIZACIÓN</h2>
            <input type='text' placeholder='Nombre' />
            <input type='text' placeholder='Teléfonos' />
            <input type='text' placeholder='Correo' />
            <div className='one-content-button button-two'>SOLICITAR COTIZACION</div>
          </form>
        </div>
      </div>
    </div>
  )
}
