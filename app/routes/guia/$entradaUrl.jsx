import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import { getEntrada } from "~/models/entrada.server";


export async function loader({params}){
    const {entradaUrl}=params
    const entrada =await getEntrada(entradaUrl)
    if(entrada.data.length===0){
        throw new Response('',{
            status:404,
            statusText:'Entrada No Encontrada'
        })
    }
    return entrada
}

function Entrada() {

  
    const entrada=useLoaderData()
    const{titulo,contenido,creado,image}=entrada.data[0].attributes;
    const nwcontenido=contenido
  return (
    <article className='post'>
        <div className="imgContenedor">
            <img className='imagen' src={image.data.attributes.url} alt={`imagen blog ${titulo}`} />
        </div>
    <div className='contenido'>
        <h2>{titulo}</h2>
        <p className='fecha'>{creado}</p>
        <p className='texto'>{nwcontenido}</p>
    </div>
</article>
  )
}

export default Entrada