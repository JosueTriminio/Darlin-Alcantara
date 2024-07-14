import React from 'react'

export default function Nav() {
  return (
    <nav>
        <ul className='flex gap-3 items-center justify-center md:gap-10 text-white'>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#sobremi">Sobre Mi</a></li>
        </ul>
    </nav>
  )
}
