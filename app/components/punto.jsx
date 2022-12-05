import React from 'react'
import indiv from '../../public/img/indiv.svg'

function Punto({punto,agregarHtml}) {
    const{id,nombre,innerHtml}=punto
  return (
   <button  className='btnLugar' type="submit"
   onClick={e=>agregarHtml(e,innerHtml)}>
    <img id='logo' src={indiv} alt="Icono cafe"  />
    {nombre}
   </button>
  )
}

export default Punto