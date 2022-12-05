import React from 'react'
import Punto from './punto'

function ListaPuntos({puntos,agregarHtml}) {
  return (
    <>{puntos.map(punto=>
    <Punto
    key={punto.id}
    punto={punto}
    agregarHtml={agregarHtml}
    />
    )}</>
  )
}

export default ListaPuntos