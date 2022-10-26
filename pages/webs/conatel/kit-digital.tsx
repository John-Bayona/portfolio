import Image from "next/legacy/image";
import EmblaCarousel from '../../../components/conatel/EmblaCarousel'
import GeneralHeader from '../../../components/conatel/GeneralHeader'
import UncontrolledForm from '../../../components/conatel/UncontrolledForm'
import Layout from '../../../components/conatel/ConatelLayout'
import {
    firstSlide as thirdSlide,
    secondSlide as fourthSlide,
} from '../../../components/conatel/data'
import { ReactElement } from 'react'

const firstSlide = () => {
    return (
        <div className='grid place-content-center md:max-w-xs'>
            <h1 className='mx-auto   mb-4 max-w-max self-center bg-white/20 p-2 text-center text-3xl capitalize text-white md:text-sm'>
                SOLUCIONES DE DIGITALIZACIÓN
            </h1>
            <div className='content-center bg-white/80 p-2 text-center'>
                <Image
                    src='/Blue_globe_icon.svg'
                    height='150'
                    width='150'
                    className='mx-auto'
                />
                <h2 className='mt-2 font-semibold text-blue-900'>
                    Comunicaciones seguras
                </h2>
                <p className='my-4 min-w-fit'>
                    Con esta solución dispondrás de seguridad en las conexiones
                    entre los dispositivos de tus empleados y la empresa
                </p>
                <p className='my-4 text-blue-300'>ConaSecur</p>
                <p className='font-bold'>desde 90€ por usuario.</p>
            </div>
        </div>
    )
}
const secondSlide = () => {
    return (
        <div className=' grid place-content-center md:max-w-xs'>
            <h1 className='mx-auto mb-4 max-w-max content-center self-center bg-white/20 p-2 text-center text-3xl capitalize text-white'>
                SOLUCIONES DE DIGITALIZACIÓN
            </h1>
            <div className='content-center bg-white/80 p-2 text-center'>
                <img
                    src='/globe2.png'
                    height='150'
                    width='150'
                    className='relative mx-auto self-center'
                />
                <div className=' p-2'>
                    <h2 className='mt-2 font-semibold text-blue-900'>
                        Ciberseguridad
                    </h2>
                    <p className='my-4'>
                        El objetivo es proporcionar seguridad básica y avanzada
                        para los dispositivos de tus empleados
                    </p>
                    <p className='my-4 text-blue-300'>ConaCiber</p>
                    <p className='font-bold'>desde 100€ por usuario.</p>
                </div>
            </div>
        </div>
    )
}

function KitDigital() {
    return (
        <>
            <div className='mx-auto my-0  w-[70%] min-w-[70%] place-content-center lg:w-4/5 md:w-[90%]'>
                <GeneralHeader>Kit digital</GeneralHeader>
                <EmblaCarousel
                    props={[
                        '/plataformas-finanzas-descentralizadas-5.jpg',
                        [
                            { structure: thirdSlide() },
                            { structure: fourthSlide() },
                        ],
                    ]}
                />
                <div>
                    <h2 className='mb-8 text-center text-4xl text-gray-500'>
                        ¿QUÉ ES EL KIT DIGITAL?
                    </h2>
                    <p className='text-center'>
                        El Kit Digital es una iniciativa del gobierno español
                        dirigida a todas las pequeñas y medianas empresas, así
                        como autónomos, que tiene como objetivo subvencionar la
                        implantación de soluciones digitales para conseguir un
                        avance significativo en el nivel de madurez digital. Las
                        subvenciones, de hasta 12.000€, son a fondo perdido y
                        por tanto, no suponen ningún gasto para la empresa.
                    </p>
                    <p className='pb-14 text-center'>
                        Este programa contará con una inversión de más de 3.000
                        millones de euros repartidos de 2021 a 2023 para
                        impulsar el crecimiento y desarrollo de hasta un millón
                        de pymes y autónomos.
                    </p>
                    <img
                        src='/sello_web_kitdigitalnavarra.png'
                        width='100%'

                        // className='h-32'
                    />
                </div>
                <EmblaCarousel
                    props={[
                        '/bg-tiled-blue.jpg',
                        [
                            { structure: firstSlide() },
                            { structure: secondSlide() },
                        ],
                    ]}
                />
                <div>
                    <div className='mb-14'>
                        <div className='grid grid-cols-2 grid-rows-1'>
                            <h2 className='my-auto mr-14 text-right text-4xl text-gray-500'>
                                Requisitos
                            </h2>
                            <ol className=' mx-auto list-inside list-[disc] '>
                                <li>
                                    Ser una pequeña empresa, microempresa o
                                    autónomo.
                                </li>
                                <li>
                                    Cumplir con los límites financieros y
                                    efectivos que definen las diferentes
                                    categorías.
                                </li>
                                <li>
                                    Estar en situación de alta y tener la
                                    antigüedad mínima establecida en la
                                    convocatoria.
                                </li>
                                <li>
                                    Carecer de situación de empresa en crisis.
                                </li>
                                <li>
                                    Estar al corriente de las obligaciones
                                    tributarias frente a la Seguridad Social.
                                </li>
                                <li>
                                    No incurrir en ninguna de las prohibiciones
                                    previstas en el artículo 13.2 de la ley
                                    38/2003 de 17 de noviembre general de
                                    subvenciones.
                                </li>
                                <li className='pb-5'>
                                    No estar sujeto a ninguna orden de
                                    recuperación pendiente por parte de la
                                    Comisión Europea que haya declarado ayuda
                                    ilegal e incompatible con el mercado común.
                                </li>
                                <button className=' rounded-md bg-gradient-to-br from-[#020381] to-[#2874fc] px-3 py-4 font-bold text-white'>
                                    Descárgate la guía
                                </button>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-cyan-500/30 to-blue-500/30 p-14'>
                    <div className='grid grid-cols-2 '>
                        <h2 className='t mr-8 text-right text-3xl'>
                            ¿Cómo solicito el Bono Digital?
                        </h2>
                        <div>
                            <p className='text-xl text-gray-500'>
                                El bono se solicita a través de la web
                                <a href='acelerapyme.es/kit-digital'>
                                    acelerapyme.es
                                </a>
                                . <br></br>Contacta con nosotros y te ayudaremos
                                durante todo el proceso.
                            </p>
                        </div>
                    </div>
                    <div
                        className='mx-auto grid 
                    w-max grid-cols-3 place-content-center gap-2 p-4  md:grid-cols-1'>
                        <div className=' flex-col  content-center justify-center bg-white p-4 text-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                version='1.1'
                                viewBox='0 0 752 752'>
                                <g fill='#12b0fb'>
                                    <path d='m274.18 371.27c-12.312 9.9453-27.469 15.629-44.043 15.629s-32.203-5.6836-44.043-15.629c-20.836 14.207-34.57 38.359-34.57 65.355v20.836c0 7.5781 6.1562 13.734 13.734 13.734h111.29v-20.363c0-21.785 7.1055-42.148 18.941-58.723-2.8398-4.2617-6.1562-8.0508-9.4727-11.367-3.7891-3.3164-7.5742-6.6328-11.84-9.4727z' />
                                    <path d='m230.14 366.53c27.469 0 50.199-22.258 50.199-50.199 0-27.469-22.258-50.199-50.199-50.199-27.469 0-50.199 22.258-50.199 50.199 0 27.465 22.258 50.199 50.199 50.199z' />
                                    <path d='m577.75 380.74c-3.3164-3.3164-7.5781-6.6289-11.84-9.4727-12.312 9.9453-27.469 15.629-44.043 15.629s-32.203-5.6836-44.043-15.629c-8.5234 5.6836-15.629 12.785-21.312 21.312 11.84 16.574 18.941 36.465 18.941 58.25v20.363h111.77c7.5781 0 13.734-6.1562 13.734-13.734v-20.836c0.003906-21.785-8.9961-41.203-23.203-55.883z' />
                                    <path d='m521.86 366.53c27.469 0 50.199-22.258 50.199-50.199 0-27.469-22.258-50.199-50.199-50.199-27.469 0-50.199 22.258-50.199 50.199 0 27.465 22.734 50.199 50.199 50.199z' />
                                    <path d='m420.52 385.47c-12.312 9.9453-27.469 15.629-44.516 15.629-16.574 0-32.203-5.6836-44.043-15.629-20.836 14.207-34.57 38.359-34.57 65.355v20.836c0 7.5781 6.1562 13.734 13.734 13.734h130.71c7.5781 0 13.734-6.1562 13.734-13.734v-20.836c0-21.785-8.9961-41.676-23.207-55.883-3.7891-3.3164-8.0508-6.6289-11.84-9.4727z' />
                                    <path d='m376 380.74c27.469 0 50.199-22.258 50.199-50.199 0-27.941-22.73-49.727-50.199-49.727s-50.199 22.258-50.199 50.199c0 27.941 22.734 49.727 50.199 49.727z' />
                                </g>
                            </svg>
                            <h2 className='m-4 text-lg font-bold text-blue-700'>
                                Segmento 1
                            </h2>
                            <p className='m-8 text-3xl font-extrabold text-gray-500'>
                                12.000€
                            </p>
                            <p className='text-gray-500'>
                                entre 10 y 50 empleados
                            </p>
                        </div>
                        <div className=' flex-col  content-center justify-center bg-white p-4 text-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                version='1.1'
                                viewBox='0 0 752 752'>
                                <g fill='#12b0fb'>
                                    <path d='m274.18 371.27c-12.312 9.9453-27.469 15.629-44.043 15.629s-32.203-5.6836-44.043-15.629c-20.836 14.207-34.57 38.359-34.57 65.355v20.836c0 7.5781 6.1562 13.734 13.734 13.734h111.29v-20.363c0-21.785 7.1055-42.148 18.941-58.723-2.8398-4.2617-6.1562-8.0508-9.4727-11.367-3.7891-3.3164-7.5742-6.6328-11.84-9.4727z' />
                                    <path d='m230.14 366.53c27.469 0 50.199-22.258 50.199-50.199 0-27.469-22.258-50.199-50.199-50.199-27.469 0-50.199 22.258-50.199 50.199 0 27.465 22.258 50.199 50.199 50.199z' />
                                    <path d='m577.75 380.74c-3.3164-3.3164-7.5781-6.6289-11.84-9.4727-12.312 9.9453-27.469 15.629-44.043 15.629s-32.203-5.6836-44.043-15.629c-8.5234 5.6836-15.629 12.785-21.312 21.312 11.84 16.574 18.941 36.465 18.941 58.25v20.363h111.77c7.5781 0 13.734-6.1562 13.734-13.734v-20.836c0.003906-21.785-8.9961-41.203-23.203-55.883z' />
                                    <path d='m521.86 366.53c27.469 0 50.199-22.258 50.199-50.199 0-27.469-22.258-50.199-50.199-50.199-27.469 0-50.199 22.258-50.199 50.199 0 27.465 22.734 50.199 50.199 50.199z' />
                                    <path d='m420.52 385.47c-12.312 9.9453-27.469 15.629-44.516 15.629-16.574 0-32.203-5.6836-44.043-15.629-20.836 14.207-34.57 38.359-34.57 65.355v20.836c0 7.5781 6.1562 13.734 13.734 13.734h130.71c7.5781 0 13.734-6.1562 13.734-13.734v-20.836c0-21.785-8.9961-41.676-23.207-55.883-3.7891-3.3164-8.0508-6.6289-11.84-9.4727z' />
                                    <path d='m376 380.74c27.469 0 50.199-22.258 50.199-50.199 0-27.941-22.73-49.727-50.199-49.727s-50.199 22.258-50.199 50.199c0 27.941 22.734 49.727 50.199 49.727z' />
                                </g>
                            </svg>
                            <h2 className='m-4 text-lg font-bold text-blue-700'>
                                Segmento 2
                            </h2>
                            <p className='m-8 text-3xl font-extrabold text-gray-500'>
                                6.000 €
                            </p>
                            <p className='text-gray-500'>
                                entre 3 y 9 empleados
                            </p>
                        </div>
                        <div className=' flex-col  content-center justify-center bg-white p-4 text-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                version='1.1'
                                viewBox='0 0 752 752'>
                                <g fill='#12b0fb'>
                                    <path d='m274.18 371.27c-12.312 9.9453-27.469 15.629-44.043 15.629s-32.203-5.6836-44.043-15.629c-20.836 14.207-34.57 38.359-34.57 65.355v20.836c0 7.5781 6.1562 13.734 13.734 13.734h111.29v-20.363c0-21.785 7.1055-42.148 18.941-58.723-2.8398-4.2617-6.1562-8.0508-9.4727-11.367-3.7891-3.3164-7.5742-6.6328-11.84-9.4727z' />
                                    <path d='m230.14 366.53c27.469 0 50.199-22.258 50.199-50.199 0-27.469-22.258-50.199-50.199-50.199-27.469 0-50.199 22.258-50.199 50.199 0 27.465 22.258 50.199 50.199 50.199z' />
                                    <path d='m577.75 380.74c-3.3164-3.3164-7.5781-6.6289-11.84-9.4727-12.312 9.9453-27.469 15.629-44.043 15.629s-32.203-5.6836-44.043-15.629c-8.5234 5.6836-15.629 12.785-21.312 21.312 11.84 16.574 18.941 36.465 18.941 58.25v20.363h111.77c7.5781 0 13.734-6.1562 13.734-13.734v-20.836c0.003906-21.785-8.9961-41.203-23.203-55.883z' />
                                    <path d='m521.86 366.53c27.469 0 50.199-22.258 50.199-50.199 0-27.469-22.258-50.199-50.199-50.199-27.469 0-50.199 22.258-50.199 50.199 0 27.465 22.734 50.199 50.199 50.199z' />
                                    <path d='m420.52 385.47c-12.312 9.9453-27.469 15.629-44.516 15.629-16.574 0-32.203-5.6836-44.043-15.629-20.836 14.207-34.57 38.359-34.57 65.355v20.836c0 7.5781 6.1562 13.734 13.734 13.734h130.71c7.5781 0 13.734-6.1562 13.734-13.734v-20.836c0-21.785-8.9961-41.676-23.207-55.883-3.7891-3.3164-8.0508-6.6289-11.84-9.4727z' />
                                    <path d='m376 380.74c27.469 0 50.199-22.258 50.199-50.199 0-27.941-22.73-49.727-50.199-49.727s-50.199 22.258-50.199 50.199c0 27.941 22.734 49.727 50.199 49.727z' />
                                </g>
                            </svg>
                            <h2 className='m-4 text-lg font-bold text-blue-700'>
                                Segmento 3
                            </h2>
                            <p className='m-8 text-3xl font-extrabold text-gray-500'>
                                2.000 €
                            </p>
                            <p className='text-gray-500'>
                                entre 0 y 2 empleados
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className='my-10 text-center text-5xl font-semibold italic text-gray-500'>
                    Benefíciate de estas ayudas sin ningún coste
                </h2>
                <UncontrolledForm />
            </div>
        </>
    )
}
export default KitDigital
KitDigital.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
