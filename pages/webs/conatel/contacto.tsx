import ControlledForm from '../../../components/conatel/UncontrolledForm/UncontrolledForm'
import Layout from '../../../components/conatel/ConatelLayout'
import { ReactElement } from 'react'

function Contacto() {
    return (
        <>
            <div className='my-0 mx-auto grid w-[70%] min-w-[70%] place-content-center  lg:w-4/5 md:w-[90%]'>
                <h1 className='my-5 min-w-[70vw] text-4xl font-bold'>
                    Contacto
                </h1>
                <div className='grid place-content-center text-center text-lg font-semibold'>
                    <h2 className='my-4 text-4xl font-bold'>¿Hablamos?</h2>
                    <p>
                        En Conatel queremos escuchar tus necesidades y ayudarte
                        con tus proyectos tecnológicos.
                    </p>
                    <p className='mb-2'>
                        Puedes contactar con nosotros a través de cualquiera de
                        los medios que indicamos a continuación.
                    </p>
                    <p
                        className='mb-2
                    '>
                        Si lo deseas puedes contactar con nosotros a través de
                        este formulario
                    </p>
                </div>
                <ControlledForm />
                <div className='flex w-auto content-center justify-around rounded-2xl bg-[#e5e7f3] p-8'>
                    <div className='m-1 ml-2 flex content-center justify-center'>
                        <svg
                            className='flex justify-center self-center fill-blue-900'
                            xmlns='http://www.w3.org/2000/svg'
                            width='42'
                            height='75'
                            viewBox='0 0 24 24'>
                            <path d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z' />
                        </svg>

                        <div className='ml-2'>
                            Estamos en <div>Polígono Plazaola, F</div>{' '}
                            <div>nave 1</div> <div>31195 Aizoain – Navarra</div>
                        </div>
                    </div>
                    <div className=' flex'>
                        <svg
                            className='flex justify-center self-center fill-blue-900'
                            xmlns='http://www.w3.org/2000/svg'
                            width='42'
                            height='75'
                            viewBox='0 0 24 24'>
                            <path d='M11.99 0l-11.99 8.723v15.277h24v-15.277l-12.01-8.723zm.001 2.472l9.793 7.113-6.735 4.588-3.049-2.47-3.049 2.471-6.737-4.589 9.777-7.113zm-9.991 9.386l5.329 3.63-5.329 4.318v-7.948zm.474 10.142l9.526-7.723 9.526 7.723h-19.052zm19.526-2.194l-5.329-4.317 5.329-3.631v7.948z' />
                        </svg>
                        <div className='flex-column ml-4 content-center justify-center self-center'>
                            <p>Envíanos un correo</p>
                            <a href='mailto:conatel@conatel.biz'>
                                conatel@conatel.biz
                            </a>
                        </div>
                    </div>
                    <div className='m-1 ml-2 flex content-center justify-center '>
                        <svg
                            className='flex justify-center self-center fill-blue-900'
                            xmlns='http://www.w3.org/2000/svg'
                            width='42'
                            height='75'
                            viewBox='0 0 24 24'>
                            <path d='M20.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.083 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.522 6.795c-.008.004-1.989.978-2.11 1.033zm-9.438-2.264c-1.476 1.072-3.506 1.17-4.124.106-.47-.809-.311-1.728-.127-2.793.201-1.161.429-2.478-.295-3.71-1.219-2.076-3.897-1.983-5.906-.67l.956 1.463c.829-.542 1.784-.775 2.493-.609 1.653.388 1.151 2.526 1.03 3.229-.212 1.223-.45 2.61.337 3.968 1.243 2.143 4.579 2.076 6.836.316-.412-.407-.811-.843-1.2-1.3z' />
                        </svg>
                        <div className='ml-2 self-center'>
                            <div className='self-center'>Llámanos</div>
                            <div className='self-center'>948 198 101</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contacto

Contacto.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
