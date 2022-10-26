import Link from 'next/link'
import { useRef } from 'react'

const hoverStyles =
    'absolute hidden transition-all bg-white z-10  group-hover:block duration-500 p-2 border-2 border-transparent rounded-b shadow-lg shadow-black/20 '
const underlineStyles =
    "after:content-['']  after:border-b-2 after:border-black border-solid after:block after:scale-0 transition-all group-hover:after:scale-100 group-hover:after:duration-500 group-hover:after:ease-out"
const arrowStyles =
    'inline-block text-xs ml-1 group-hover:-rotate-180 transition-all duration-500 self-center'

function Navbar() {
    const inputRef = useRef<HTMLInputElement>(null)
    const removeNavbar = () => {
        if (!inputRef.current) return
        inputRef.current.checked = false
    }
    return (
        <>
            <ul className=' mr-5 flex w-full content-between justify-between py-6 pb-2 shadow lg:text-sm'>
                <div className='my-auto ml-9 '>
                    <li className='mx-2'>
                        <Link legacyBehavior={true} href='/webs/conatel/'>
                            <a
                                onClick={removeNavbar}
                                className='  text-5xl font-bold lg:text-3xl'>
                                Conatel
                            </a>
                        </Link>
                    </li>
                </div>
                <div className='mr-6 hidden pb-4 md:relative md:block'>
                    <input
                        type='checkbox'
                        className='peer  hidden'
                        id='navbar-input'
                        ref={inputRef}
                    />
                    <label
                        htmlFor='navbar-input'
                        className='ow-md group relative flex h-12 w-12 transform items-center justify-center overflow-hidden rounded-full ring-0  transition-all duration-200  '>
                        <div className='flex h-5 w-5 origin-center transform flex-col justify-between overflow-hidden transition-all duration-300'>
                            <div className='h-1 w-7 origin-left transform bg-gray-500 transition-all duration-300 group-peer-checked:translate-x-10'></div>
                            <div className='h-1 w-7 transform rounded bg-gray-500 transition-all delay-75 duration-300 group-peer-checked:translate-x-10'></div>
                            <div className='h-1 w-7 origin-left transform bg-gray-500 transition-all delay-150 duration-300 group-peer-checked:translate-x-10'></div>

                            <div className='absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 group-peer-checked:w-12 group-peer-checked:translate-x-0'>
                                <div className='absolute h-1 w-5 rotate-0 transform bg-gray-500 transition-all delay-300 duration-500 group-peer-checked:rotate-45'></div>
                                <div className='absolute h-1 w-5 -rotate-0 transform bg-gray-500 transition-all delay-300 duration-500 group-peer-checked:-rotate-45'></div>
                            </div>
                        </div>
                    </label>
                    <div className=' fixed top-0 left-0 z-10 m-0 hidden h-full w-0 overflow-hidden bg-white pt-10 shadow-md peer-checked:block peer-checked:w-2/3'>
                        <ol className=' flex-col'>
                            <li className='mt-4'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/'>
                                    <a
                                        onClick={removeNavbar}
                                        className='m-4 p-4 text-4xl font-bold'>
                                        Conatel
                                    </a>
                                </Link>
                            </li>

                            <li className='mt-4'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/la-empresa'>
                                    <a
                                        onClick={removeNavbar}
                                        className='m-4 p-4 text-xl'>
                                        La empresa
                                    </a>
                                </Link>
                            </li>
                            <li className='mt-4'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/servicios-comunicaciones'>
                                    <a
                                        onClick={removeNavbar}
                                        className='m-4 p-4 text-xl'>
                                        Servicios de comunicaciones
                                    </a>
                                </Link>
                            </li>
                            <li className='mt-4'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/servicios-seguridad'>
                                    <a
                                        onClick={removeNavbar}
                                        className='m-4 p-4 text-xl'>
                                        Servicios de seguridad
                                    </a>
                                </Link>
                            </li>
                            <li className='mt-4'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/compromisos'>
                                    <a
                                        onClick={removeNavbar}
                                        className='m-4 p-4 text-xl'>
                                        Compromisos
                                    </a>
                                </Link>
                            </li>
                            <li className='mt-4'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/contacto'>
                                    <a
                                        onClick={removeNavbar}
                                        className='m-4 p-4 text-xl'>
                                        Contacto
                                    </a>
                                </Link>
                            </li>
                            <li className='mt-4'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/area-privada'>
                                    <a
                                        onClick={removeNavbar}
                                        className='m-4 p-4 text-xl'>
                                        Área privada
                                    </a>
                                </Link>
                            </li>
                            <li className='mt-4'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/kit-digital'>
                                    <a
                                        onClick={removeNavbar}
                                        className='m-4 p-4 text-xl'>
                                        Kit digital
                                    </a>
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className='mx-11 my-auto flex md:hidden'>
                    <li className='mx-2'>
                        <ol>
                            <div className='group relative inline-block'>
                                <li className={`flex`}>
                                    <Link
                                        legacyBehavior={true}
                                        href='/webs/conatel/la-empresa'
                                        passHref>
                                        <a className={`${underlineStyles} `}>
                                            La empresa
                                        </a>
                                    </Link>
                                    <div className={`${arrowStyles} `}>⮛</div>
                                </li>
                                <div className={`${hoverStyles} `}>
                                    <div>
                                        <li>
                                            <Link
                                                legacyBehavior={true}
                                                className=''
                                                href='/webs/conatel/la-empresa#bienvenidos'
                                                scroll={false}>
                                                Bienvenidos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                legacyBehavior={true}
                                                href='/webs/conatel/la-empresa#experiencia'
                                                scroll={false}>
                                                Experiencia
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                legacyBehavior={true}
                                                href='/webs/conatel/la-empresa#colaboraciones'
                                                scroll={false}>
                                                Colaboraciones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                legacyBehavior={true}
                                                href='/webs/conatel/la-empresa#certificaciones'
                                                scroll={false}>
                                                Certificaciones
                                            </Link>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </ol>
                    </li>
                    <div className='group'>
                        <li className='mx-2'>
                            <ol>
                                <li className='flex'>
                                    <Link
                                        legacyBehavior={true}
                                        href='/webs/conatel/servicios-comunicaciones'>
                                        <a
                                            className={`${underlineStyles} group-hover:after:duration-700`}>
                                            Servicios de comunicaciones
                                        </a>
                                    </Link>
                                    <div className={`${arrowStyles}`}>⮛</div>
                                </li>
                                <div className={`${hoverStyles} `}>
                                    <li>
                                        <Link
                                            legacyBehavior={true}
                                            href='/webs/conatel/servicios-comunicaciones#solucion-voz-datos'>
                                            Solución de voz y datos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            legacyBehavior={true}
                                            href='/webs/conatel/servicios-comunicaciones#soluciones-multimedia'>
                                            Soluciones multimedia
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            legacyBehavior={true}
                                            href='/webs/conatel/servicios-comunicaciones#fibra-optica'>
                                            Fibra óptica y cableado
                                        </Link>
                                    </li>
                                </div>
                            </ol>
                        </li>
                    </div>
                    <div className='group'>
                        <ol>
                            <li className='group mx-2 flex'>
                                <Link
                                    legacyBehavior={true}
                                    href='/webs/conatel/servicios-seguridad'>
                                    <a className={`${underlineStyles}`}>
                                        Servicios de seguridad
                                    </a>
                                </Link>
                                <div className={`${arrowStyles}`}>⮛</div>
                            </li>
                            <div className={`${hoverStyles} `}>
                                <li>
                                    <Link
                                        legacyBehavior={true}
                                        href='/webs/conatel/servicios-seguridad#soluciones-seguridad'>
                                        Soluciones de seguridad
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/webs/conatel/servicios-seguridad#gestion-residencial'>
                                        Gestión residencial
                                    </Link>
                                </li>
                            </div>
                        </ol>
                    </div>
                    <li className='group mx-2'>
                        <Link
                            href='/webs/conatel/compromisos'
                            className={`${underlineStyles}`}>
                            Compromisos
                        </Link>
                    </li>
                    <li className='group mx-2'>
                        <Link
                            href='/webs/conatel/contacto'
                            className={`${underlineStyles}`}>
                            Contacto
                        </Link>
                    </li>
                    <li className='group mx-2 '>
                        <Link
                            href='/webs/conatel/area-privada'
                            className={`${underlineStyles}`}>
                            Área privada
                        </Link>
                    </li>
                    <li className='group mx-2'>
                        <Link
                            href='/webs/conatel/kit-digital'
                            className={`${underlineStyles}`}>
                            Kit Digital
                        </Link>
                    </li>
                </div>
            </ul>
        </>
    )
}
export default Navbar
