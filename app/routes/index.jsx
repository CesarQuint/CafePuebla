import {useState,useEffect} from 'react'
import {source} from '~/helpers/main'
import {Link} from '@remix-run/react'

export default function Index() {

  const[photos,setPhotos]=useState([]);

    //Conseguir foto de fondo
    useEffect(()=>{
  
      const getPhotos= async()=>{
        const key='29040311-c7b4e19ba67a9d003439367df';
        const respuesta=await fetch(`https://pixabay.com/api/?key=29040311-c7b4e19ba67a9d003439367df&q=${encodeURIComponent('coffe')}&category=Coffe`)
        const resultado=await respuesta.json()
        const hits=await resultado.hits
        setPhotos(hits)
        }
       getPhotos(); 
        
    },[])
    const src=source(photos);


  return (
    <main className="index">
    <h1>¿Quienes Somos?</h1>
    <div className='imgCont'>
    <img className='presentation' src={src} alt="" />
    </div>
    
    <p>Hola y bienvenido a este espacio dedicado a compartir
      mas cultura sobre el cafe.Es favuloso si llegaste aqui 
      siendo del estado de Puebla.<br/>
      En nuestras diversas paginas podras encontrar datos interesantes
      sobre el café y su consumo ,de los tipos del cafe ,etc..Agradezco
      que revises a profundidad la pagina,las redes sociales estan 
      parte inferior de la pagina.
    </p>

    <div className='textos'>
      <h2>Cafeteria de la semana</h2>
        <div className='divVisita'>
          <h2>Seul Cafe</h2>
          <a className='visita' target='_blank' href='https://www.facebook.com/SeulCafeKr/'>Visita su FaceBook</a>

        </div>
    </div>

    <div className='textos'>
      <h3>Alexander Pope</h3>
      <p className='cita'>"Café lo que hace que los politicos sean sabios,y que puedan
        ver a traves de todas las cosas con sus ojos medio cerrados"</p>
    </div>
    </main>
  );
}
