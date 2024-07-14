import React from 'react'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='flex items-center justify-center md:justify-around sticky top-0 z-50 bg-neutral-900 '>
        <a href="/"><img src="/img/favicon.svg" alt="icono alcabarmix" className='w-32' /></a>
        <Nav />
    </header>
  )
}
