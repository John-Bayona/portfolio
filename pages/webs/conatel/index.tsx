import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import EmblaCarousel from '../../../components/conatel/EmblaCarousel'
import GeneralHeader from '../../../components/conatel/GeneralHeader'
import ImgNav from '../../../components/conatel/ImgNav'
import {
    seguridad,
    serviciosNav,
    firstSlide,
    secondSlide,
} from '../../../components/conatel/data'
import Layout from '../../../components/conatel/Layout'
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}
//This one is too big and could probably be split up further to improve readability.
function Home() {
    return (
        <>
            <div className='mx-auto my-0 w-[70%] min-w-[70%] place-content-center lg:w-4/5 md:w-[90%]'>
                <GeneralHeader displaySeparator={false}>Inicio</GeneralHeader>
                <EmblaCarousel
                    props={[
                        '/slider-1.jpg',
                        [
                            { structure: firstSlide() },
                            { structure: secondSlide() },
                        ],
                    ]}
                />
                <h1 className='text-center text-4xl font-bold'>
                    Desde 1996 Consultora Navarra de Telecomunicaciones
                </h1>
                <ImgNav img={[...serviciosNav, ...seguridad]} />
                <div className='mt-10 grid grid-cols-4 bg-[#e5e7f3] p-14 pb-2 text-center font-bold sm:p-2 sm:text-sm'>
                    <div className='mt-auto'>
                        <svg
                            version='1.1'
                            id='Layer_1'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mx-auto w-10'
                            x='0px'
                            y='0px'
                            viewBox='0 0 484.948 484.948'>
                            <g>
                                <path
                                    d='M397.474,76.948h-70v70h20v68.626l-90,15V66.926l35.407,0.153L242.408,0l-50.146,66.644l35.211,0.152v203.779l-90-15
                                    v-72.01c11.814-5.628,20-17.682,20-31.616c0-19.299-15.701-35-35-35s-35,15.701-35,35c0,13.934,8.186,25.989,20,31.616v97.424
                                    l120,20v55.726c-28.631,6.792-50,32.556-50,63.234c0,35.841,29.159,65,65,65c35.841,0,65-29.159,65-65
                                    c0-30.678-21.37-56.442-50-63.234v-95.726l120-20v-94.041h20V76.948z M277.474,419.948c0,19.299-15.701,35-35,35s-35-15.701-35-35
                                    s15.701-35,35-35S277.474,400.649,277.474,419.948z'
                                />
                            </g>
                        </svg>
                        <h3 className='text-bold my-4 text-2xl'>Conatel</h3>
                    </div>
                    <div className='mt-auto'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            version='1.1'
                            viewBox='0 0 752 752'
                            className='mx-auto w-20'>
                            <g fill='#12b0fb'>
                                <path d='m274.18 371.27c-12.312 9.9453-27.469 15.629-44.043 15.629s-32.203-5.6836-44.043-15.629c-20.836 14.207-34.57 38.359-34.57 65.355v20.836c0 7.5781 6.1562 13.734 13.734 13.734h111.29v-20.363c0-21.785 7.1055-42.148 18.941-58.723-2.8398-4.2617-6.1562-8.0508-9.4727-11.367-3.7891-3.3164-7.5742-6.6328-11.84-9.4727z' />
                                <path d='m230.14 366.53c27.469 0 50.199-22.258 50.199-50.199 0-27.469-22.258-50.199-50.199-50.199-27.469 0-50.199 22.258-50.199 50.199 0 27.465 22.258 50.199 50.199 50.199z' />
                                <path d='m577.75 380.74c-3.3164-3.3164-7.5781-6.6289-11.84-9.4727-12.312 9.9453-27.469 15.629-44.043 15.629s-32.203-5.6836-44.043-15.629c-8.5234 5.6836-15.629 12.785-21.312 21.312 11.84 16.574 18.941 36.465 18.941 58.25v20.363h111.77c7.5781 0 13.734-6.1562 13.734-13.734v-20.836c0.003906-21.785-8.9961-41.203-23.203-55.883z' />
                                <path d='m521.86 366.53c27.469 0 50.199-22.258 50.199-50.199 0-27.469-22.258-50.199-50.199-50.199-27.469 0-50.199 22.258-50.199 50.199 0 27.465 22.734 50.199 50.199 50.199z' />
                                <path d='m420.52 385.47c-12.312 9.9453-27.469 15.629-44.516 15.629-16.574 0-32.203-5.6836-44.043-15.629-20.836 14.207-34.57 38.359-34.57 65.355v20.836c0 7.5781 6.1562 13.734 13.734 13.734h130.71c7.5781 0 13.734-6.1562 13.734-13.734v-20.836c0-21.785-8.9961-41.676-23.207-55.883-3.7891-3.3164-8.0508-6.6289-11.84-9.4727z' />
                                <path d='m376 380.74c27.469 0 50.199-22.258 50.199-50.199 0-27.941-22.73-49.727-50.199-49.727s-50.199 22.258-50.199 50.199c0 27.941 22.734 49.727 50.199 49.727z' />
                            </g>
                        </svg>
                        <h3 className='text-bold my-4 text-2xl'>Abarcamos</h3>
                    </div>
                    <div className='mt-auto'>
                        <svg
                            version='1.1'
                            xmlns='http://www.w3.org/2000/svg'
                            x='0px'
                            y='0px'
                            viewBox='0 0 119.713 119.713'
                            className='mx-auto w-10'>
                            <g>
                                <path
                                    d='M33.92,71.21c-2.479-0.827-5.128-1.281-7.887-1.281c-13.744,0-24.89,11.14-24.89,24.889c0,2.831,0.479,5.549,1.35,8.085
		                            l16.865-16.865l15.915,15.915l-16.64,16.641c2.338,0.728,4.823,1.116,7.401,1.119c13.748,0,24.891-11.146,24.891-24.892
		                            c0-3.388-0.677-6.615-1.905-9.56l36.773-36.758c2.478,0.827,5.128,1.281,7.886,1.281c13.744,0,24.891-11.142,24.891-24.89
		                            c0-2.831-0.479-5.548-1.35-8.084l-16.865,16.865L84.439,17.759l16.641-16.64C98.742,0.392,96.257,0.001,93.679,0
		                            C79.931,0,68.788,11.144,68.788,24.891c0,3.388,0.677,6.615,1.905,9.559L33.92,71.21z'
                                />
                            </g>
                        </svg>
                        <h3 className='text-bold my-4 text-2xl'>Disponemos</h3>
                    </div>
                    <div className='mt-auto'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            className='mx-auto w-10'>
                            <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z' />
                        </svg>{' '}
                        <h3 className='text-bold my-4 text-2xl'>Estamos</h3>
                    </div>
                    <div>
                        <ul>
                            <li className='list-inside list-disc '>
                                Proyectamos
                            </li>
                            <li className='list-inside list-disc '>
                                Implantamos
                            </li>
                            <li className='list-inside list-disc '>
                                Mantenemos
                            </li>
                        </ul>

                        <p>Soluciones globales de telecomunicaciones.</p>
                    </div>
                    <div>
                        <ul>
                            <li className='list-inside list-disc '>
                                Industria
                            </li>
                            <li className='list-inside list-disc '>Comercio</li>
                            <li className='list-inside list-disc '>
                                Servicios
                            </li>
                            <li className='list-inside list-disc '>
                                Administración Pública.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            del soporte técnico y los recursos materiales
                            necesarios para facilitar las soluciones actuales y
                            de futuro que requieran nuestros clientes.
                        </p>{' '}
                    </div>
                    <div>
                        <p>
                            a la vanguardia de las Nuevas Tecnologías emergentes
                            del mercado.
                        </p>{' '}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
