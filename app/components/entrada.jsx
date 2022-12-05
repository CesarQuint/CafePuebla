
import {Link} from '@remix-run/react'

function Entrada({entrada}) {
    const{titulo,contenido,creado,url,image}=entrada
 
  return (
<div className='card'>
    <img src={image.data.attributes.url} alt={`Imagen Articulo: ${titulo}`} />
    <div className='contenido'>
        <h3>{titulo}</h3>
        <p className='descripcion'>{contenido}</p>
            <div className='inferior'>
            <section>
                </section>
                <Link className='enlace' to={`/guia/${url}`}>Ver Articulo....</Link>
            </div>
    </div>
    
</div>
  )
}

export default Entrada