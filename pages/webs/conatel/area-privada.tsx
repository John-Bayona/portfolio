import Image from 'next/image'
import GeneralHeader from '../../../components/conatel/GeneralHeader'
import { ReactElement, useState } from 'react'
import Layout from '../../../components/conatel/Layout'

function AreaPrivada() {
    const [language, setLanguage] = useState('spanish')
    return (
        <>
            <div className='mx-auto my-0 w-[70%] min-w-[70] place-content-center lg:w-4/5 md:w-[90%]'>
                <div className='flex content-end justify-end'>
                    <div onClick={() => setLanguage((prev) => 'spanish')}>
                        spanish
                    </div>
                    /
                    <div onClick={() => setLanguage((prev) => 'english')}>
                        english
                    </div>
                </div>
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
                        placeholder={
                            language === 'spanish' ? 'Usuario' : 'User'
                        }
                    />
                    <input
                        className='input-general mx-auto mb-4 w-56'
                        type='password'
                        name='password'
                        pattern='[a-zA-Z0-9*]{}'
                        placeholder={
                            language === 'spanish' ? 'Contraseña' : 'Password'
                        }
                    />
                    <button
                        className='mt-2  self-center rounded bg-blue-900 px-4 py-2 font-bold text-white'
                        type='submit'>
                        {language === 'spanish' ? 'Enviar' : 'Submit'}
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
