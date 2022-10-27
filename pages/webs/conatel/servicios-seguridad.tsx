import ImgNav from 'c/ImgNav'
import type { ImgType } from 'c/ImgNav'
import GeneralHeader from 'c/GeneralHeader'
import Seguridad from 'c/servicios-soluciones/Seguridad'
import Residencial from 'c/servicios-soluciones/Residencial'
import Layout from 'c/ConatelLayout'
import { ReactElement } from 'react'
import { seguridad } from 'c/data'

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
