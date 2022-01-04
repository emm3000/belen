import React from 'react'
import useScroll from '../../hooks/useScroll'
import EmailIcon from '../../iconComponents/Email'
import './navbar.css'
import Img from '../../../assets/icon.png'

export default function NavBar () {
  const change = useScroll()

  return (
    <nav className={`${change ? 'nav-bar' : 'nav-bar'}`}>
      <div>
        {/* <p className='logo'>METALCORD</p> */}
        <img src={Img} alt='' className='nav-bar-app' />
      </div>
      <div className='email-box nav-one'>
        <EmailIcon width={40} />
        <p className='email-label'>metalcord@gmail.com</p>
      </div>
      {/* <div className='nav-one'>
        Datos personales
      </div> */}
    </nav>
  )
}
