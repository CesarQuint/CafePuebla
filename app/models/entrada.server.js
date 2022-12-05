export async function getEntradas(){
    const respuesta= await fetch(`${process.env.API_URL}/entradas?populate=image`);
    return await respuesta.json()

}

export async function getEntrada(url){
    const respuesta= await fetch(`${process.env.API_URL}/entradas?filters[url]=${url}&populate=image`);
    return await respuesta.json()

}