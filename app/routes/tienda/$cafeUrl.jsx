import { useState } from "react";
import { useLoaderData ,useOutletContext} from "@remix-run/react";
import { getCafe } from "~/models/cafe.server";

export async function loader({params}){
    const {cafeUrl}=params
    const cafe =await getCafe(cafeUrl)
    if(cafe.data.length===0){
        throw new Response('',{
            status:404,
            statusText:'Producto No Encontrada'
        })
    }
    return cafe
}

function Cafe() {

    const{agregarCarrito}=useOutletContext()
    const [cantidad,setCantidad]=useState(0)
    const cafe=useLoaderData()
    const{name,description,amount,image}=cafe.data[0].attributes;

    const handleSubmit=e=> {
        e.preventDefault()
        if(cantidad<1){
            alert("Cantidad no valida")
            return
        }

        const cafeSeleccionado={
            id:cafe.data[0].id,
            imagen:image.data.attributes.url,
            nombre:name,
            precio:amount,
            cantidad
        }
        agregarCarrito(cafeSeleccionado)
        alert('Item agregado Exitosamente')
    }

  return (
    <div className="cafe">
        <img className='imagen'src={image.data.attributes.url} alt={`Imagen de la Guitarra ${name}`} />
        <div className="contenido">
            <h3>{name}</h3>
            <p className="texto">{description}</p>
            <p className="precio">${amount}</p>
            <form className="formulario"
            onSubmit={handleSubmit}>
                <label htmlFor="cantidad">Cantidad: </label>
                <select id='cantidad'
                onChange={e=>setCantidad(+e.target.value)}
                 >
                    <option value="0">--Seleccione--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>

                <input type="submit" value="Agregar al Carrito" />
            </form>
        </div>
    </div>
  )
}

export default Cafe