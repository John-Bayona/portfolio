import { ReactElement } from 'react'
import Bienvenidos from '../../../components/conatel/la-empresa/Bienvenidos'
import Certificaciones from '../../../components/conatel/la-empresa/Certificaciones'
import Colaboraciones from '../../../components/conatel/la-empresa/Colaboraciones'
import Experiencia from '../../../components/conatel/la-empresa/Experiencia'
import Layout from '../../../components/conatel/Layout'

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
