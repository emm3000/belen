import React from 'react'
import FacebookIcon from '../../iconComponents/FacebookIcon'
import InstagramIcon from '../../iconComponents/InstagramIcon'
import LinkedinIcon from '../../iconComponents/LinkedinIcon'
import './footer.css'

export default function Footer () {
  return (
    <footer className='colorBackground'>
      <div className='footerContainer'>
        <article className='articleFirst'>
          <h2>METALCORD</h2>
          <p>
            Somos METALCORD, una empresa peruana que brindamos soluciones completas e innovadoras, a través de diferentes gamas de productos y servicios, a los sectores industrial, construcción, minería, eventos, etc., para la comercialización de nuestros productos, con el objetivo de maximizar la seguridad y eficacia, convirtiéndonos en un socio estratégico para todos nuestros clientes.
          </p>
          <a href='#'>MAS INFO</a>
        </article>

        <article className='articleSecond'>
          <h2>LINEAS DE PRODUCTOS</h2>
          <ul>
            <li>- Estructuras Metálicas</li>
            <li>- Alquiler de andamios </li>
            <li>- Puertas seccionales</li>
            <li>- Puertas industriales </li>
          </ul>
        </article>

        <article className='articleThird'>
          <h2>REDES</h2>
          <ul>
            <li className='icon'><FacebookIcon width={40} fill='#fff' /><a href='https://www.facebook.com/Metalcord-Mu%C3%B1oz-101427139098160' target='_blank' rel='noreferrer'>Facebook</a></li>
            <li className='icon'><InstagramIcon width={40} fill='#fff' /><a href='https://www.instagram.com/metalcord.em/' target='_blank' rel='noreferrer'>Instagram</a></li>
            <li className='icon'><LinkedinIcon width={40} fill='#fff' /><a href='https://www.linkedin.com/in/metalcord-estructuras-metalicas-a5446022a/' target='_blank' rel='noreferrer'>Linkedin</a></li>
          </ul>
        </article>
      </div>
    </footer>
  )
}
