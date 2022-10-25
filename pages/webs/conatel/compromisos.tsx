import { ReactElement } from 'react'
import Layout from '../../../components/conatel/ConatelLayout'

function Compromisos() {
    return (
        <>
            <div className='relative mx-auto my-0 grid h-[90vh] min-h-full w-[70%] min-w-[70%] place-content-center xl:h-auto lg:w-4/5 md:w-[90%]'>
                <h1 className='my-5 mb-10 text-4xl font-bold'>Compromisos</h1>
                <div className='m-auto h-full content-center justify-center'>
                    <div className='w-300 m-auto my-auto grid grid-cols-3 grid-rows-3 gap-1 text-center'>
                        <div className=''>
                            <span className='font-semibold'>
                                1. Desde los comienzos, Conatel ha estado
                                trabajando para ofrecer las últimas novedades
                                del mercado en telecomunicaciones,
                            </span>
                            <span>
                                impulsados por las necesidades y preferencias
                                observadas en los clientes, tratando de
                                evolucionar.
                            </span>
                            cdxdx
                        </div>
                        <div>
                            <span className='font-semibold'>
                                2. Contamos con la colaboración y el soporte
                                tecnológico de empresas pertenecientes a Grupo
                                Universal de Telecomunicaciones Apolo IAE.
                            </span>
                        </div>
                        <div>
                            <span>3. </span>
                            <span>En la actualidad,</span>
                            <span className='font-semibold'>
                                colaboramos con más de 200 proveedores
                            </span>
                            y contamos con una amplia cartera de clientes a
                            nivel provincial, nacional e internacional.
                        </div>
                        <div>
                            <span className='font-semibold'>
                                4. Comprometidos con el medio ambiente,
                            </span>
                            <span>
                                reciclamos todos aquellos recursos de los que
                                hacemos uso, como papel, cartón, cableado,
                                aparatos electrónicos y eléctricos, etc.
                            </span>
                        </div>
                        <div>
                            <span className='font-semibold'>
                                5. Cuidamos de nuestros trabajadores y les
                                hacemos sentirse valorados, ya que son el pilar
                                de nuestra empresa. Son formados en prevención
                                de riesgos laborales, para adoptar hábitos
                                saludables y para fomentar un buen ambiente
                                laboral.
                            </span>
                            <span>
                                El trabajo en equipo, desde la primera llamada,
                                hasta que el técnico acude al centro de trabajo
                                del cliente, es primordial para atenderles de
                                forma satisfactoria.
                            </span>
                        </div>
                        <div>
                            <span className='font-semibold'>
                                6. Cumplimos con todos los requisitos legales,
                                contractuales y reglamentarios que aplican y
                                corresponden a nuestro ámbito de actuación.
                            </span>
                        </div>
                        <div className='col-span-3'>
                            <span className='font-semibold'>7. </span>
                            <span>Conforme a las directrices de la</span>
                            <span className='font-semibold '>
                                Norma ISO 9001, revisamos, mejoramos y
                                optimizamos los procesos y controles existentes,
                                para garantizar la calidad y trazabilidad
                            </span>
                            <span>
                                de nuestros productos. Buscamos ofrecer un
                                servicio de calidad y para ello es
                                imprescindible analizar la satisfacción de
                                nuestros clientes. Asimismo, estamos
                                comprometidos con nuestros proveedores y por
                                ello, la dirección de la empresa asume éste
                                compromiso con la calidad y lo declara de
                                obligado cumplimiento: cumplir y hacer cumplir
                                la política es responsabilidad de todas las
                                personas que participan en las actividades de
                                Conatel.
                            </span>
                            <span>
                                A fin de contribuir a la mejora, agradecemos
                                cualquier sugerencia por su parte.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Compromisos
Compromisos.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}
