import Image from 'next/legacy/image'
import GeneralHeader from '../GeneralHeader'

function VozDatos() {
    return (
        <>
            <div id='solucion-voz-datos'>
                <GeneralHeader>Solución de voz y datos</GeneralHeader>
                <div className='flex-cols'>
                    <div className=' mb-14 grid grid-cols-2 grid-rows-1 sm:grid-cols-1'>
                        <div className='self-center'>
                            <p className='mb-8 text-4xl'>
                                Proveedor de servicios de internet ISP
                            </p>
                            <ol className='ml-5 '>
                                <li className='list-globe m-2'>
                                    Operador de voz y datos
                                </li>
                                <li className='list-globe m-2'>
                                    Venta de Servicios Telefónicos Fijo y Móvil
                                </li>
                                <li className='list-globe m-2'>
                                    Proveedor de acceso a Internet Registrado en
                                    la CNMT
                                </li>
                                <li className='list-globe m-2'>
                                    Alojamiento de dominios web
                                </li>
                            </ol>
                        </div>
                        <Image src='/voz-datos1.jpg' width={480} height={320} />
                    </div>
                    <div className='flex-cols w-full bg-[#e5e7f3] p-14 pb-2 sm:p-4'>
                        <h2 className='mb-10 text-center text-4xl'>
                            Telefonía y Comunicaciones
                        </h2>
                        <div>
                            <ol className='grid grid-cols-3 grid-rows-4 items-center text-center sm:grid-cols-2'>
                                <li className='list-phone m-2 '>
                                    Centrales telefónicas IP, digitales e
                                    hibridas, centralitas virtuales
                                    (Siemens-Unify, Alcatel-Lucent, Panasonic,
                                    Aastra, Yeastar)
                                </li>
                                <li className='list-phone m-2'>
                                    Teléfonos IP, softphones, teléfonos
                                    digitales y analógicos (Siemens-Unify,
                                    Siemens Gigaset, Yealink, Akuvox, Cisco,
                                    Alcatel-Lucent, Panasonic)
                                </li>
                                <li className='list-phone m-2'>
                                    Sistemas de telefonía inalámbrica Dect e
                                    IP-Dect (Gigaset Siemens)
                                </li>
                                <li className='list-phone m-2'>
                                    Soluciones IVR, operadora automática, correo
                                    vocal avanzado, mensajería unificada
                                </li>
                                <li className='list-phone m-2'>
                                    Equipos de audio conferencia para salas
                                    (Polycom, Konftel). Soluciones Call Center
                                </li>
                                <li className='list-phone m-2'>
                                    Grabadores de llamadas (VoIP, RDSI y
                                    analógicos), software de gestión de
                                    grabación
                                </li>
                                <li className='list-phone m-2'>
                                    Software de tarificación empresarial y
                                    hotelero (Char)
                                </li>
                                <li className='list-phone m-2'>
                                    Porteros automáticos integrados con central
                                    telefónica
                                </li>
                                <li className='list-phone m-2'>
                                    Comunicaciones Unificadas: integración de
                                    teléfono fijo, extensión móvil, gestión de
                                    conferencias, información de presencia,
                                    mensajería vocal, fax, correo electrónico
                                    colaboración web (Siemens-Unify)
                                </li>
                                <li className='list-phone col-start-2 m-2'>
                                    Auriculares inalámbricos y accesorios
                                    (Plantronics)
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className='mt-14 grid grid-cols-2 sm:grid-cols-1'>
                        <div className='self-center'>
                            <h2 className='mb-8 text-4xl'>
                                Networking y Seguridad
                            </h2>
                            <ol className='ml-5 sm:ml-1 sm:pb-4'>
                                <li className='list-lock m-2 sm:m-0'>
                                    Diseño, suministro, instalación y
                                    configuración de electrónica de red
                                    switches, routers y balanceadores (HP,
                                    Cisco, D-link, Netgear, Huawei, DrayTek)
                                </li>
                                <li className='list-lock m-2 sm:m-0'>
                                    Equipamiento Wi-Fi, puntos de acceso para
                                    interior o exterior, controladoras, estudios
                                    de cobertura y radioenlaces (Sonicwall,
                                    Cisco, Engenius, Ubiquiti)
                                </li>
                                <li className='list-lock m-2 sm:m-0'>
                                    Sistemas y servicios de seguridad
                                    (Firewall), seguridad perimetral, antivirus,
                                    antispam, prevención de intrusiones,
                                    antispyware, filtrado de contenidos,
                                    conexiones VPN (Sonicwall, Draytek)
                                </li>
                            </ol>
                        </div>
                        <Image
                            src='/voz-datos2.jpg'
                            layout='responsive'
                            width={480}
                            height={320}
                            className=''
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default VozDatos
