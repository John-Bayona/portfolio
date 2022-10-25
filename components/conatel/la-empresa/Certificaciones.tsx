import GeneralHeader from '../GeneralHeader';

function Certificaciones() {
    return (
        <div id='certificaciones'>
            <GeneralHeader>Certificaciones</GeneralHeader>
            <div className='grid grid-cols-3 grid-rows-2 p-5 font-bold'>
                <div>
                    Para garantizar la calidad de nuestros servicios,
                    instalaciones, materiales, etc., desde 2012, hemos optado
                    por seguir los pasos y guías que marca la ISO 9001.
                </div>
                <div>
                    Consideramos que ésta es un valor añadido para poder
                    satisfacer al cliente, para poder encaminarnos hacia la
                    mejora continua, adquiriendo hábitos óptimos y ser más
                    críticos, ofreciendo una garantía que proporcione seguridad
                    tanto a nuestros proveedores como a nuestros clientes
                </div>
                <div>
                    La evaluación y supervisión favorece conseguir objetivos
                    para tomar las medidas apropiadas.
                </div>
                <div className='link col-span-3 text-center'>
                    <ul className=' text-blue-600'>
                        <p className='mb-2 text-xl font-bold text-black !no-underline '>
                            CERTIFICACIONES:
                        </p>
                        <li className='underline visited:text-purple-600 hover:text-blue-800'>
                            <a
                                href='https://www.conatel.biz/wp-content/uploads/2017/03/Inscripcio%CC%81n-Incendios.pdf'
                                download={true}>
                                – Inscripción Incendios
                            </a>
                        </li>
                        <li className='underline visited:text-purple-600 hover:text-blue-800'>
                            <a
                                href='https://www.conatel.biz/wp-content/uploads/2017/03/ISO.pdf'
                                download={true}>
                                – ISO
                            </a>
                        </li>
                        <li className='underline visited:text-purple-600 hover:text-blue-800'>
                            <a
                                href='https://www.conatel.biz/wp-content/uploads/2017/03/REGISTRO-DE-INSTALADORA-DE-TELEC.pdf'
                                download={true}>
                                – REGISTRO DE INSTALADORA DE TELEC
                            </a>
                        </li>
                        <li className='underline visited:text-purple-600 hover:text-blue-800'>
                            <a
                                href='https://www.conatel.biz/wp-content/uploads/2017/03/Registro-instalacio%CC%81n-Baja-Tensio%CC%81n-EMPR-2015-000639_CSV.pdf'
                                download={true}>
                                – Registro instalacón Baja Tensión
                                EMPR-2015-000639_CSV
                            </a>
                        </li>
                        <li className='underline visited:text-purple-600 hover:text-blue-800'>
                            <a
                                href='https://www.conatel.biz/wp-content/uploads/2017/03/Registro-operador.pdf'
                                download={true}>
                                – Registro operador
                            </a>
                        </li>
                        <li className='underline visited:text-purple-600 hover:text-blue-800'>
                            <a
                                href='https://www.conatel.biz/wp-content/uploads/2017/03/Registro-Operadores-Moviles.pdf'
                                download={true}>
                                – Registro Operadores Móviles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Certificaciones;
