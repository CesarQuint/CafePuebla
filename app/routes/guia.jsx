import {Outlet,useOutletContext} from '@remix-run/react'
import styles from '~/styles/guia.css'

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
            title:'Cafe-Puebla Guia',
            viewport:"width=device-width,initial-scale=1"
        }
    )
  }
  

function Guia() {
  return (
    <main>
        <Outlet/>
    </main>
  )
}

export default Guia