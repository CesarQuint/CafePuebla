import React from 'react'
import {Link} from '@remix-run/react'

function Cafe({cafe}) {
    const{name,description,amount,image,url,content}=cafe
  return (
<div className='card'>
    <img src={image.data.attributes.formats.medium.url} alt={`Imagen Cafe: ${name}`} />
    <div className='contenido'>
        <h3>{name}</h3>
        <p className='descripcion'>{description}</p>
    </div>
    <div className='inferior'>
        <section>
            <p><span>Contenido: </span>{content}g</p>
            <p className='precio'><span>Precio: </span>${amount}</p>  
        </section>
        
        <Link className='enlace' to={`/tienda/${url}`}>Ver Producto</Link>
    </div>
</div>
  )
}

export default Cafe