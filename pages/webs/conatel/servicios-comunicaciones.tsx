import ImgNav from 'c/ImgNav'
import type { ImgType } from 'c/ImgNav'
import GeneralHeader from 'c/GeneralHeader'
import VozDatos from 'c/servicios-soluciones/VozDatos'
import SolucionesMultimedia from 'c/servicios-soluciones/SolucionesMultimedia'
import FibraOpticaCableado from 'c/servicios-soluciones/FibraOpticaCableado'
import Layout from 'c/ConatelLayout'
import { ReactElement } from 'react'
import { serviciosNav } from 'c/data'

function ServiciosComunicaciones() {
    return (
        <>
            <div className='mx-auto my-0 grid w-[70%] min-w-[70%] max-w-4xl place-content-center lg:w-4/5 md:w-[90%]'>
                <GeneralHeader displaySeparator={false}>
                    Sercicios de comunicaciones
                </GeneralHeader>
                <ImgNav img={serviciosNav} />
                <VozDatos />
                <SolucionesMultimedia />
                <FibraOpticaCableado />
            </div>
        </>
    )
}
export default ServiciosComunicaciones
ServiciosComunicaciones.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
