import Image from 'next/legacy/image'
import GeneralHeader from 'c/GeneralHeader'
import { ReactElement } from 'react'
import Layout from 'c/ConatelLayout'

function AreaPrivada() {
    return (
        <>
            <div className='mx-auto my-0 w-[70%] min-w-[70] place-content-center lg:w-4/5 md:w-[90%]'>
                <GeneralHeader>Área privada</GeneralHeader>
                <form className='grid place-content-center text-center'>
                    <div className='mx-auto'>
                        <Image src='/logo.png' width='300' height='300' />
                    </div>
                    <h2 className='my-4 text-center text-4xl'>Conatel</h2>
                    <input
                        className='input-general mx-auto w-56'
                        type='text'
                        name='user'
                        pattern='[a-zA-Z0-9]'
                        placeholder='Usuario'
                    />
                    <input
                        className='input-general mx-auto mb-4 w-56'
                        type='password'
                        name='password'
                        pattern='[a-zA-Z0-9*]{9}'
                        placeholder='Contraseña'
                    />
                    <button
                        className='mt-2  self-center rounded bg-blue-900 px-4 py-2 font-bold text-white'
                        type='submit'>
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
}
export default AreaPrivada
AreaPrivada.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
