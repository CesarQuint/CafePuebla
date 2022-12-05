import {useLoaderData} from '@remix-run/react'
import { getCafes } from '~/models/cafe.server'
import ListaCafes from '~/components/listacafes';


export async function loader(){
    const cafes= await getCafes();
    return cafes.data
}

function Tienda() {
    const cafes=useLoaderData()
  return (
    <div>
        <ListaCafes
        cafes={cafes}
        />
    </div>
  )
}

export default Tienda