import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return[
        {
            title:'GuitarLA - Sobre nosotros',
            description: 'Venta de guitarras, blog de música'
        }
    ]
}
export function links(){
    return[
        {
            rel:'stylesheet',
            href: styles
        },
        {
            rel:'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros(){
    return(
        <main className='contenedor nosotros'>
            <h2 className='heading'>Nosotros</h2>
            <div className='contenido'>
                <img src={imagen} alt="sobre nosotros"/>
                <div>
                    <p>Lo que sea sobre nosotros</p>
                    <p>Otra información sobre nosotros</p>
                </div>
            </div>
        </main>
    )
}
export default Nosotros;