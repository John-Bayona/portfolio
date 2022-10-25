import ImgNav from '../../../components/conatel/ImgNav'
import type { ImgType } from '../../../components/conatel/ImgNav'
import GeneralHeader from '../../../components/conatel/GeneralHeader'
import Seguridad from '../../../components/conatel/servicios-soluciones/Seguridad'
import Residencial from '../../../components/conatel/servicios-soluciones/Residencial'
import Layout from '../../../components/conatel/ConatelLayout'
import { ReactElement } from 'react'
import { seguridad } from '../../../components/conatel/data'

function ServiciosSeguridad() {
    return (
        <>
            <div className='mx-auto my-0 grid w-[70%] min-w-[70%] max-w-4xl place-content-center lg:w-4/5 md:w-[90%]'>
                <GeneralHeader displaySeparator={false}>
                    Servicios de seguridad
                </GeneralHeader>
                <ImgNav img={seguridad} />
                <Seguridad />
                <Residencial />
            </div>
        </>
    )
}
export default ServiciosSeguridad
ServiciosSeguridad.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
