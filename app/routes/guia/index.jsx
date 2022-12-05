import {useLoaderData} from '@remix-run/react'
import { getEntradas } from '~/models/entrada.server'
import ListaEntradas from '~/components/listaentradas';


export async function loader(){
    const entradas= await getEntradas();
    return entradas.data
}

function Guia() {
    const entradas=useLoaderData()
  return (
    <div>
        <ListaEntradas
        entradas={entradas}
        />
    </div>
  )
}

export default Guia