import React from 'react'
import Cafe from './cafe';

function ListaCafes({cafes}) {
  return (
    <>
     <h2 className='heading'>Nuestra Seleccion</h2>
          {cafes?.length && (
              <div className='cafe-grid'>
                  {cafes.map(cafe=>(
                      <Cafe
                      key={cafe?.id}
                      cafe={cafe?.attributes}
                      />
                  ))}
              </div>
          )}
    </>
  )
}

export default ListaCafes