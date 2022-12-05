import {Outlet,useOutletContext} from '@remix-run/react'
import styles from '~/styles/tienda.css'

export function links(){
    return [
        {
            rel:'stylesheet',
            href:styles
        }
    ]
}

export function meta(){
    return(
        {
            charset:'utf-8',
            title:'Cafe-Puebla Tienda',
            viewport:"width=device-width,initial-scale=1"
        }
    )
  }
  

function Tienda() {
  return (
    <main>
        <Outlet 
        context={useOutletContext()}
        />
    </main>
  )
}

export default Tienda