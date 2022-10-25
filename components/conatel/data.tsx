import { ImgType } from './ImgNav'
import React from 'react'
export const seguridad: ImgType = [
    {
        href: '/servicios-seguridad#soluciones-seguridad',
        imgSrc: '/soluciones_seguridad_4-e1513340556994-300x300.jpg',
        text: 'Soluciones de seguridad',
    },
    {
        href: '/servicios-seguridad#gestion-residencial',
        imgSrc: '/gestion_residencial_2-e1513340697463-300x300.jpg',
        text: 'Gestión residencial',
    },
]
export const serviciosNav: ImgType = [
    {
        imgSrc: '/soluciones_voz_datos_3-e1513340106491.jpg',
        text: 'Solución de voz y datos',
        href: '/webs/conatel/servicios-comunicaciones#solucion-voz-datos',
    },
    {
        imgSrc: '/soluciones_multimedia_4-e1513340319886-300x300.jpg',
        text: 'Soluciones Multimedia',
        href: '/webs/conatel/servicios-comunicaciones#soluciones-multimedia',
    },
    {
        imgSrc: '/fibra_cableado_3-e1513340445404-300x300.jpg',
        text: 'Fibra óptica y multimedia',
        href: '/webs/conatel/servicios-comunicaciones#fibra-optica',
    },
]
export const firstSlide = () => {
    return (
        <div className='max-w-max bg-white/80 p-4'>
            <h2 className='p-4 text-5xl font-bold'>Bienvenidos</h2>
            <p>Ofreciendo soluciones desde 1996</p>
        </div>
    )
}
export const secondSlide = () => {
    return (
        <div className='my-center max-w-max bg-white/80 p-4'>
            <h2 className='p-4 text-5xl font-bold'>
                Kit Digital te ayudamos a conseguirlo
            </h2>
            <p>
                Una oportunidad única para digitalizar tu negocio con
                subvenciones a fondo perdido de hasta 12.000 €
            </p>
        </div>
    )
}
