export async function getCafes(){
    const respuesta= await fetch(`${process.env.API_URL}/cafes?populate=image`);
    return await respuesta.json()

}

export async function getCafe(url){
    const respuesta= await fetch(`${process.env.API_URL}/cafes?filters[url]=${url}&populate=image`);
    return await respuesta.json()

}