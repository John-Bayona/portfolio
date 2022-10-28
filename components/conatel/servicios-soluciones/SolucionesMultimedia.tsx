import Image from "next/image";
import GeneralHeader from '../GeneralHeader';

function SolucionesMultimedia() {
    return <>
        <div id='soluciones-multimedia'>
            <GeneralHeader>Soluciones multimedia</GeneralHeader>
            <div className='flex-cols'>
                <div className='font- mb-14 grid grid-cols-2 grid-rows-1 sm:grid-cols-1'>
                    <div className='self-center sm:mb-4'>
                        <h2 className='mb-8 text-4xl'>Megafonía</h2>
                        <ol className='ml-5'>
                            <li className='list-speaker m-2'>
                                Megafonía de alarma y evacuación (Bosch
                                Security)
                            </li>
                            <li className='list-speaker m-2'>
                                Gestión de avisos y música ambiental (Bosch
                                Security)
                            </li>
                            <li className='list-speaker m-2'>
                                Soluciones para congresos, sistemas de
                                debate
                            </li>
                            <li className='list-speaker m-2'>
                                Sistemas de transmisión de idiomas
                                (traducción simultánea)
                            </li>
                        </ol>
                    </div>
                    <Image
                        src='/multimedia-1.jpg'
                        width='480'
                        height='320'
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </div>
            </div>
            <div className=''>
                <div className=' grid grid-cols-2 bg-[#e5e7f3] p-8 sm:grid-cols-1'>
                    <Image
                        src='/multimedia-2.jpg'
                        width='480'
                        height='400'
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    <div className='ml-8'>
                        <h2 className='mb-8 text-4xl sm:mt-4'>
                            Comunicación audiovisual
                        </h2>
                        <ol className='ml-5'>
                            <li className='list-tick m-2'>
                                Proyectores de video, pantallas de
                                proyección
                            </li>
                            <li className='list-tick m-2'>
                                Pizarras interactivas
                            </li>
                            <li className='list-tick m-2'>
                                Pantallas de led, sistemas de videowall
                            </li>
                            <li className='list-tick m-2'>
                                Monitores interactivos y software
                            </li>
                            <li className='list-tick m-2'>
                                Visualizadores de objetos y documentos
                            </li>
                            <li className='list-tick m-2'>
                                Mobiliario audiovisual
                            </li>
                            <li className='list-tick m-2'>
                                Videoconferencia (Polycom)
                            </li>
                            <li className='list-tick m-2'>
                                Cartelería digital
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default SolucionesMultimedia;
