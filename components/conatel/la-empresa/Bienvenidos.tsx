import GeneralHeader from '../GeneralHeader';

function Bienvenidos() {
    return (
        <>
            <GeneralHeader>Bienvenidos</GeneralHeader>
            <h2 className='mb-5 text-center text-xl font-semibold'>
                Consultora Navarra de Telecomunicaciones es una empresa que
                proyecta, asesora, instala y mantiene equipos y sistemas de
                telecomunicaciones.
            </h2>
            <div className='mt-5 grid grid-cols-3 grid-rows-2'>
                <p className='font-semibold'>
                    Desarrollamos nuestra actividad en empresas de la Comunidad
                    Foral de Navarra.
                </p>
                <p className='font-semibold'>
                    Apostamos por un negocio innovador y de calidad, ya que
                    estamos inmersos en un sector en constante evolución.
                </p>
                <p className='font-semibold'>
                    Buscamos adaptar las últimas tecnologías a las necesidades
                    de cada cliente.
                </p>
                <p className='font-semibold'>
                    La atención y el servicio personalizado para cada cliente es
                    lo que nos motiva y anima a seguir esforzándonos en crecer y
                    mejorar como empresa de servicios.
                </p>
                <p className='font-semibold'>
                    También atendemos mediante socios tecnológicos y empresas
                    colaboradoras a clientes situados en todo el territorio
                    nacional.
                </p>
                <p className='font-semibold'>
                    Disponemos de una gran capacidad de adaptación para incluir
                    nuevas soluciones y productos
                </p>
            </div>
            <div className='mt-5 grid h-max place-content-center bg-[#e5e7f3] bg-main bg-repeat p-7 text-center '>
                <h2 className='text-2xl font-extrabold'>
                    Nuestras áreas de actividad
                </h2>
                <div className='-mt-20 grid grid-cols-2 grid-rows-2 place-content-center content-center gap-1 text-center  '>
                    <div className='mt-28 self-center border-r-2 border-black/10 p-0 pb-5 font-bold'>
                        Telecomunicaciones
                    </div>
                    <div className='mt-28 self-center p-0 pb-5 font-bold'>
                        Seguridad
                    </div>
                    <div className='telecomunicaciones grid grid-cols-3 grid-rows-2 content-center gap-2 text-center sm:grid-cols-2'>
                        <div className='flex content-center  items-center justify-center p-2 text-center '>
                            <svg
                                className='mr-2 sm:hidden'
                                xmlns='http://www.w3.org/2000/svg'
                                width='32'
                                height='32'
                                fill='currentColor'
                                viewBox='0 0 16 16'>
                                <path d='M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z' />
                                <path d='M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z' />
                            </svg>

                            <p>Proveedor de Servicios de Internet ISP</p>
                        </div>
                        <div className='flex content-center items-center justify-center sm:list-none sm:border-r-2 sm:border-black/10 sm:pr-2 '>
                            <svg
                                className='mr-2 sm:hidden'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='currentColor'
                                viewBox='0 0 16 16'>
                                <path
                                    fill-rule='evenodd'
                                    d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                                />
                            </svg>

                            <p>Telefonía y comunicaciones</p>
                        </div>

                        <div className='flex content-center items-center justify-center border-r-2 border-black/10 p-4 text-center sm:border-none'>
                            <svg
                                className='mr-2 sm:hidden'
                                width='24'
                                height='24'
                                viewBox='0 0 15 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M7 6.5V5H8V6.5C8 6.77614 7.77614 7 7.5 7C7.22386 7 7 6.77614 7 6.5Z'
                                    fill='black'
                                />
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M9 0H11V4H12V7.61803L9.80902 12H9V15H8V12H7V15H6V12H5.19098L3 7.61803V4H4V0H6V3H9V0ZM9 4H6V6.5C6 7.32843 6.67157 8 7.5 8C8.32843 8 9 7.32843 9 6.5V4ZM6 9V10H9V9H6Z'
                                    fill='black'
                                />
                                <path d='M8 0H7V2H8V0Z' fill='black' />
                            </svg>
                            <p>Cableado y estructurado</p>
                        </div>
                        <div className='flex content-center items-center justify-center sm:border-r-2 sm:border-black/10 '>
                            <svg
                                className='mr-2 sm:hidden'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M20.375 6.91239C20.1541 6.73647 19.89 6.63808 19.6996 6.57806C19.485 6.51041 19.2392 6.4546 18.9798 6.40708C18.4594 6.31174 17.8078 6.23611 17.0839 6.17697C15.6314 6.05832 13.8102 6 12 6C10.1899 6 8.36857 6.05832 6.91616 6.17697C6.19223 6.2361 5.54057 6.31174 5.02019 6.40708C4.76081 6.4546 4.51502 6.51041 4.30039 6.57806C4.10999 6.63808 3.84592 6.73647 3.62505 6.91238C3.40949 7.08407 3.28462 7.29928 3.21392 7.44347C3.13621 7.60197 3.07764 7.77214 3.03167 7.93418C2.93954 8.25891 2.8713 8.64765 2.81984 9.05684C2.71614 9.88131 2.66667 10.9039 2.66667 11.9173C2.66667 12.9315 2.71622 13.9683 2.81921 14.8223C2.87049 15.2475 2.93757 15.6493 3.02556 15.9896C3.10107 16.2815 3.23096 16.696 3.49692 16.9986C3.73744 17.2723 4.07035 17.3907 4.22569 17.4424C4.43435 17.5118 4.67621 17.5666 4.92705 17.6119C5.43301 17.7034 6.08328 17.7755 6.81165 17.8317C8.27474 17.9445 10.1431 18 12 18C13.8569 18 15.7253 17.9445 17.1883 17.8317C17.9167 17.7755 18.567 17.7034 19.0729 17.6119C19.3238 17.5666 19.5657 17.5118 19.7743 17.4424C19.9296 17.3907 20.2626 17.2723 20.5031 16.9986C20.769 16.696 20.8989 16.2815 20.9744 15.9896C21.0624 15.6493 21.1295 15.2475 21.1808 14.8223C21.2838 13.9683 21.3333 12.9315 21.3333 11.9173C21.3333 10.9039 21.2839 9.88132 21.1802 9.05685C21.1287 8.64766 21.0605 8.25891 20.9683 7.93418C20.9224 7.77214 20.8638 7.60197 20.7861 7.44347C20.7154 7.29928 20.5905 7.08407 20.375 6.91239Z'
                                    stroke='#333333'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M6 15H6.01'
                                    stroke='#333333'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                            <p>Instalaciones ICT-2</p>
                        </div>
                        <div className='flex content-center items-center justify-center p-2 text-center'>
                            <svg
                                className='mr-2 sm:hidden'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='currentColor'
                                viewBox='0 0 16 16'>
                                <path d='M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z' />
                            </svg>
                            <p>Megafonía</p>
                        </div>
                        <div className='flex content-center items-center justify-center border-r-2 border-black/10 pr-4'>
                            <svg
                                className='mr-2 sm:hidden'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='currentColor'
                                viewBox='0 0 16 16'>
                                <path
                                    fill-rule='evenodd'
                                    d='M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z'
                                />
                            </svg>
                            <p>Comunicación Audiovisual</p>
                        </div>
                    </div>
                    <div className='seguridad grid grid-cols-2 grid-rows-2 gap-7 '>
                        <div className='flex content-center items-center justify-center p-2 text-center'>
                            <svg
                                className='mr-2 sm:hidden'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='currentColor'
                                viewBox='0 0 16 16'>
                                <path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z' />
                            </svg>
                            <p>Networking y seguridad</p>
                        </div>
                        <div className='flex content-center items-center justify-center p-2 text-center'>
                            <svg
                                className='mr-2 sm:hidden'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                stroke-width='2'
                                stroke='currentColor'
                                fill='none'
                                stroke-linecap='round'
                                stroke-linejoin='round'>
                                <path
                                    stroke='none'
                                    d='M0 0h24v24H0z'
                                    fill='none'
                                />
                                <circle cx='12' cy='14' r='4' />
                                <path d='M19 7v7a7 7 0 0 1 -14 0v-7' />
                                <line x1='12' y1='14' x2='12.01' y2='14' />
                            </svg>
                            <p>CCTV y Seguridad</p>
                        </div>
                        <div className='flex content-center items-center justify-center p-2 text-center'>
                            <svg
                                className='mr-2 sm:hidden'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='currentColor'
                                viewBox='0 0 16 16'>
                                <path d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z' />
                            </svg>
                            <p>Gestión de accesos</p>
                        </div>
                        <div className='flex content-center items-center justify-center p-2 text-center'>
                            <svg
                                className='mr-2 sm:hidden'
                                xmlns='http://www.w3.org/2000/svg'
                                enable-background='new 0 0 24 24'
                                viewBox='0 0 24 24'
                                width='24'
                                height='24'>
                                <path d='M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M16,17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4h-4v4c0,0.6-0.4,1-1,1s-1-0.4-1-1V7c0-0.6,0.4-1,1-1s1,0.4,1,1v4h4V7c0-0.6,0.4-1,1-1s1,0.4,1,1V17z' />
                            </svg>
                            <p>Gestión residencial y hospitalaria</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Bienvenidos;
