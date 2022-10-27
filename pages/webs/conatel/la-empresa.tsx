import { ReactElement } from 'react'
import Bienvenidos from 'c/la-empresa/Bienvenidos'
import Certificaciones from 'c/la-empresa/Certificaciones'
import Colaboraciones from 'c/la-empresa/Colaboraciones'
import Experiencia from 'c/la-empresa/Experiencia'
import Layout from 'c/ConatelLayout'

function LaEmpresa() {
    return (
        <>
            <div className='mx-auto my-0 grid w-[70%] place-content-center lg:w-4/5 md:w-[90%]'>
                <Bienvenidos />
                <Experiencia />
                <Colaboraciones />
                <Certificaciones />
            </div>
        </>
    )
}
export default LaEmpresa
LaEmpresa.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
