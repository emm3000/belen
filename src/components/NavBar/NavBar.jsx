import React from 'react'
import EmailIcon from '../../iconComponents/Email'
import './navbar.css'

export default function NavBar () {
  return (
    <nav className='nav-bar'>
      <div>
        <p className='logo'>METALCORD BELEN</p>
      </div>
      <div className='email-box'>
        <EmailIcon width={40} />
        <p className='email-label'>metalcord@gmail.com</p>
      </div>
      <div>
        Datos personales
      </div>
    </nav>
  )
}
