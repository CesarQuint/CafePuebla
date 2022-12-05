import {useState,useEffect} from 'react'
import styles from '~/styles/lugares.css'
import ListaPuntos from '~/components/listapuntos'



const puntos=[
  {id:'1',
   nombre:'cafe cultura',
   innerHtml:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.51897147982!2d-98.20098458301572!3d19.04090682284472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0e66675934f%3A0xc37e4c8bc083cc4a!2sCaf%C3%A9%20Cultura!5e0!3m2!1ses-419!2smx!4v1669684865609!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'},
   {
    id:'2',
   nombre:'Stieglitz Café',
   innerHtml:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4679369314536!2d-98.20014998301544!3d19.0431531227712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0e6480b2269%3A0xf47ece6f1f0f3a5b!2sStieglitz%20Caf%C3%A9!5e0!3m2!1ses-419!2smx!4v1669685075310!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
   },
   {
    id:'3',
    nombre:'Profética',
    innerHtml:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.47389879639!2d-98.20589378301554!3d19.04289072277987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85dabd965235f3a9%3A0x3d288ae1b469b3db!2sProf%C3%A9tica!5e0!3m2!1ses-419!2smx!4v1669685483591!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
   },
   {
    id:'4',
    nombre:'Mi Barrio Café',
    innerHtml:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4740896474673!2d-98.20542578301554!3d19.04288232278015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1388071df8d%3A0x94676a428c8871a3!2sMi%20Barrio%20Caf%C3%A9!5e0!3m2!1ses-419!2smx!4v1669685539150!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
   },
   {
    id:'5',
    nombre:'KUEPA',
    innerHtml:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.382319554034!2d-98.22071018301502!3d19.046921022648107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0d405bbf693%3A0x309778acbe822798!2sKUEPA!5e0!3m2!1ses-419!2smx!4v1669685575750!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
   },
   {
    id:'6',
    nombre:'Bonpane',
    innerHtml:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3655572805465!2d-98.20548008301495!3d19.047658622624024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc1c88a5cb90f%3A0x701bab91364afd98!2sBonpane!5e0!3m2!1ses-419!2smx!4v1669685604489!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
   }
]

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
          title:'Cafe-Puebla Lugares',
          viewport:"width=device-width,initial-scale=1"
      }
  )
}


function Lugares() {

  const[cont,setCont]=useState('')


  const agregarHtml=async(e,innerHtml)=>{
    e.preventDefault();
    console.log('funcionando');
    setCont(innerHtml)
  }
  

  const loadMapa=()=>{

    const mapa=document.querySelector('.mapa')
    if(mapa.firstChild){
      mapa.removeChild(mapa.firstChild);
    }else{
      const nwMapa=document.createElement('div')
      nwMapa.innerHTML=`${cont}`
      mapa.appendChild(nwMapa)
      setCont('')
    }
    
  }

  return (
    <main>
      <h2>Puntos Recomendados</h2>
        <div className='mapa-grid'>
          <aside className='puntos'>
            <form className='listado' action="">
              <ListaPuntos
              puntos={puntos}
              agregarHtml={agregarHtml}
              />
            </form>
          </aside>
          <section className='mapa'>
          {cont.length?(
            loadMapa()
          ):(
            <h2>Revisa nuestras recomendaciones</h2>
          )}
          </section>
        </div>
    </main>
  )
}

export default Lugares