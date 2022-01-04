import React from 'react'
import './aboutus.css'

export default function AboutUs () {
  return (
    <div id='nosotros'>
      <h1 className='about-title'>Nosotros</h1>
      <div className='about-container'>
        <div className='about-item about-descriptions'>
          <div className='about-content'>
            <h2>La empresa</h2>
            <p>Somos METALCORD, una empresa peruana que brindamos soluciones completas e innovadoras, a través de diferentes gamas de productos y servicios, a los sectores industrial, construcción, minería, eventos, etc., para la comercialización de nuestros productos, con el objetivo de maximizar la seguridad y eficacia, convirtiéndonos en un socio estratégico para todos nuestros clientes.</p>
            <h2>Misión</h2>
            <p>Satisfacer a nuestros clientes con soluciones completas, con las más altas tecnologías y la mejora continua, basadas en la innovación y un excelente servicio postventa. Con la fabricación de productos metálicos de una alta y buena calidad para realizar un servicio superior.</p>
            <h2>Visión</h2>
            <p>Ser una empresa peruana reconocida en la producción y comercialización de estructuras metálicas y acero inoxidable, brindando soluciones completas de seguridad para diversas industrias.</p>
          </div>
        </div>
        <div className='about-item about-img'>
          <img src='https://www.padillayportugal.com/img/sobre-nosotros.jpg' alt='' />
        </div>
      </div>
    </div>
  )
}
