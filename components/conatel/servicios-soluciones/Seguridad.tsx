import Image from "next/legacy/image";
import GeneralHeader from '../GeneralHeader';

function Seguridad() {
    return (
        <>
            <div id='soluciones-seguridad'>
                <GeneralHeader>Soluciones de seguridad</GeneralHeader>
                <div>
                    <h2 className='mb-8 text-4xl'>CCTV y Seguridad</h2>
                    <div className='mb-14 grid grid-cols-2 grid-rows-1'>
                        <ol>
                            <li className='list-tick m-2'>
                                Cámaras IP, analógicas y auto-domo (Bosch,
                                Dahua, Idis, Samsung)
                            </li>
                            <li className='list-tick m-2'>
                                Equipos de grabación y almacenamiento
                            </li>
                            <li className='list-tick m-2'>
                                Software de visualización y gestión de CCTV
                            </li>
                            <li className='list-tick m-2'>
                                Sistemas de detección de incendios, centrales,
                                detectores, pulsadores, módulos de señalización,
                                registrados…
                            </li>
                            <li className='list-tick m-2'>
                                Detección de intrusión
                            </li>
                            <li className='list-tick m-2'>
                                Marcado e identificación de productos con ADN
                                sintético
                            </li>
                        </ol>
                        <Image
                            className='mx-auto'
                            src='/seg-1.jpg'
                            height='300'
                            width='300'
                            layout='fixed'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 grid-rows-1 bg-[#e5e7f3] p-10'>
                    <Image src='/seg-2.jpg' height='300' width='150' />
                    <div className='my-auto pl-8'>
                        <h2 className='mb-4 text-4xl'>Gestión de accesos</h2>
                        <ol className=''>
                            <li className='list-tick m-2'>
                                Control de accesos, control de presencia
                                (Dorlet, Digitek)
                            </li>
                            <li className='list-tick m-2'>
                                Software de gestión deportiva
                            </li>
                            <li className='list-tick m-2'>Control horario</li>
                            <li className='list-tick m-2'>
                                Sistemas de control de aforo
                            </li>
                            <li className='list-tick m-2'>
                                Tornos y portillos de control de accesos
                            </li>
                            <li className='list-tick m-2'>
                                Barreras e intercomunicadores
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Seguridad;
