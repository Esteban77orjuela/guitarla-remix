import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "../../models/guitarras.server";

export async function loader({params}){
    const {guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)

    if(guitarra.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }
    return guitarra
}

export function meta({data}){
    if(!data){
        return{
            title: 'GuitarLA - Guitarra no encontrada',
            description: `Guitarras, venta de guitarras, guitarra no encontrada`
        }
    }
    return{
        title: `GuitarLA - ${data?.data[0]?.attributes.nombre}`,
        description: `Guitarras, venta de guitarras, ${data?.data[0]?.attributes.nombre}`
    }
}
function Guitarra(){
    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

    return(
        <div className="guitarra">
            <img className="imagen" src={imagen.data.attributes.url} alt={`imagen de la guitarra ${nombre}`} />
            <div className="contenido">
                <h3 className="contenido">
                    <p className="texto">{descripcion}</p>
                    <p className="precio">${precio}</p>
                </h3>
            </div>
        </div>
    )
}
export default Guitarra;