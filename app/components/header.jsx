import {useState} from 'react'
import {Link} from '@remix-run/react'
import NavBar from './navBar'
import Logo from '../../public/img/logo.svg'
import Menu from '../../public/img/menu.svg'

function Header() {

  const[desp,setDesp]=useState(false)

  const handleMenu=()=>{
    const enlace=document.querySelector('#icono')
    const navegador=document.querySelector('.navegador')

   if(!desp){
   console.log(enlace);
    console.log(navegador);
    enlace.classList.add('enlaceMenu')
    enlace.classList.remove('pequeño')
    navegador.classList.remove('pequeño')
    navegador.classList.add('navegadorMenu')
    setDesp(true)
    return
   }else{
    enlace.classList.remove('enlaceMenu')
    enlace.classList.add('pequeño')
    navegador.classList.add('pequeño')
    navegador.classList.remove('navegadorMenu')
    setDesp(false)
   }
   
  }

  return (
    <header>
      <img className='menu' src={Menu} alt=""
      onClick={handleMenu}
      />
        <Link
        id='icono'
        className='a-1 pequeño'
        to={'/'}>
            <aside>
                <img id='logo' src={Logo} alt="CafePuebla-Logo"  />
                <span id='nombre'>
                    Café Puebla
                </span>
            </aside>
        </Link>
    <NavBar/>
    </header>

  )
}

export default Header