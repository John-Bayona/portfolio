import Image from 'next/image';
import GeneralHeader from '../GeneralHeader';

function FibraOpticaCableado() {
    return (
        <>
            <div id='fibra-optica'>
                <GeneralHeader>Fibra óptica y cableado</GeneralHeader>
                <div>
                    <h2 className='mb-8 text-4xl'>Cableado Estructurado</h2>
                    <div className='mb-14 grid grid-cols-2 grid-rows-1 sm:grid-cols-1'>
                        <ol className='ml-5 sm:mb-2 '>
                            <li className='list-tick'>
                                Instalaciones de cableado estructurado para
                                redes de voz y datos (Panduit, Tyco-AMP, General
                                Cable)
                            </li>
                            <li className='list-tick'>
                                Diseño, instalación y certificación de cableado
                                estructurado hasta CAT6A (Fluke Networks)
                            </li>
                            <li className='list-tick'>
                                Reorganización de armarios, cableados de
                                interconexión de armarios para CPD
                            </li>
                            <li className='list-tick'>
                                Suministro de armarios y equipamiento de CPD,
                                SAI’s, PDU’s y líneas y protecciones para
                                alimentación, equipos de supervisión de humedad
                                y temperatura (Rittal, Retex, Monolyth,
                                Chevilan, APC, Salicru, Riello, Emerssón)
                            </li>
                            <li className='list-tick'>
                                Instalaciones de cableado de fibra óptica,
                                conexionado mediante fusión, medidas de
                                potencia, certificación, medidas de
                                reflectometría y detección y reparación de
                                averías (Sumitomo, Exfo, Noyes)
                            </li>
                        </ol>
                        <Image src='/fibra-1.jpg' height='150' width='150' />
                    </div>
                </div>
                <div className='grid grid-cols-2 grid-rows-1 bg-[#e5e7f3] px-14 py-10 sm:grid-cols-1'>
                    <Image src='/fibra-2.jpg' height='300' width='150' />
                    <div className='my-auto sm:mt-4'>
                        <h2 className='ml-10 mb-2 text-4xl'>
                            Instalaciones ICT-2
                        </h2>
                        <ol className='ml-10'>
                            <li className='list-tick'>
                                Instalación, certificación y mantenimiento de
                                infraestructura común de telecomunicaciones en
                                edificios, instaladores registrados tipo F
                                (Televes)
                            </li>
                            <li className='list-tick'>
                                Mantenimiento de comunidades de vecinos y
                                sistemas de teledistribución
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FibraOpticaCableado;
