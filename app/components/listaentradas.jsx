import React from 'react'
import Entrada from './entrada'

const ListaEntradas = ({entradas}) => {
  return (
    <>
    <h2 className='heading'>Articulos que pueden interesarte</h2>
         {entradas?.length && (
             <div className='entrada-grid'>
                 {entradas.map(entrada=>(
                     <Entrada
                     key={entrada?.id}
                     entrada={entrada?.attributes}
                     />
                 ))}
             </div>
         )}
   </>
  )
}

export default ListaEntradas