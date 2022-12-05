import React from 'react'
import {Link} from '@remix-run/react'
import shopping from'../../public/img/shoping.svg'

function NavBar() {
  return (
    <nav className='navegador pequeño'>
        <Link
        className='a-1'
        to='/tienda'>Tienda</Link>
        <Link
        className='a-1'
        to='/lugares'>Lugares</Link>
        <Link
        className='a-1'
        to='./guia'>Guia</Link>
        <Link
        className='a-1'
        to='/'>Inicio</Link>
        <Link
        id='carrito'
        className='a-1'
        to='/carrito'><img id='carritoImg' src={shopping} alt="carrito" /></Link>
    </nav>
  )
}

export default NavBar