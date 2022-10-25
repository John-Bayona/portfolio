import GeneralHeader from '../GeneralHeader';

function Residencial() {
    return (
        <>
            <div id='gestion-residencial'>
                <GeneralHeader>Gestión residencial</GeneralHeader>
                <div>
                    <h2 className='mb-8 text-center text-4xl'>
                        Intercomunicación Residencial y Hospitalaria
                    </h2>
                    <ol className='grid place-content-center'>
                        <li className='list-tick'>
                            Sistema de Teleasistencia: fija y móvil
                        </li>
                        <li className='list-tick'>
                            Sistemas de comunicación paciente – enfermera para
                            centros residenciales (Ackerman)
                        </li>
                        <li className='list-tick'>
                            Sistemas de localización: Software seguridad
                            personal con GPS
                        </li>
                        <li className='list-tick'>
                            Control de errantes (Neat)
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
}
export default Residencial;
