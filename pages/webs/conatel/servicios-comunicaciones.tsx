import ImgNav from '../../../components/conatel/ImgNav'
import type { ImgType } from '../../../components/conatel/ImgNav'
import GeneralHeader from '../../../components/conatel/GeneralHeader'
import VozDatos from '../../../components/conatel/servicios-soluciones/VozDatos'
import SolucionesMultimedia from '../../../components/conatel/servicios-soluciones/SolucionesMultimedia'
import FibraOpticaCableado from '../../../components/conatel/servicios-soluciones/FibraOpticaCableado'
import Layout from '../../../components/conatel/Layout'
import { ReactElement } from 'react'
import { serviciosNav } from '../../../components/conatel/data'

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
