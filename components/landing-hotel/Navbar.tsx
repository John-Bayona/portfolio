import Link from 'next/link'
import React from 'react'
import { phoneImage, emailImage, svgFish } from './svg'

type Props = { name: Function; language: Function; currentLanguage: string }

const Navbar = () => {
    return (
        <nav className='group absolute top-0 z-50 m-0 flex w-full flex-col text-center text-white transition ease-in-out hover:bg-white hover:text-black'>
            <div className=' relative z-50 flex justify-between border-b-[1px] border-gray-500 text-white'>
                <div className=' relative z-50 inline-block content-center justify-between self-center  text-white'>
                    <nav role='navigation' className='hidden'>
                        <div id='block relative z-1 select-none	'>
                            <input type='checkbox' className='hidden' />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id='menu'>
                                <a>
                                    <li>Offers</li>
                                </a>
                                <a>
                                    <li>Experiences</li>
                                </a>
                                <a>
                                    <li>About us</li>
                                </a>
                            </ul>
                        </div>
                    </nav>
                    <div className='group relative m-1 ml-2 inline-block h-4 group-hover:text-black'>
                        {phoneImage}
                        <span className="after:content-[' '] afterr:border-t-transparent color-white absolute top-full left-1/2 z-50 -ml-5 mt-2 hidden  rounded-md bg-black p-2  text-center opacity-0 duration-100 after:absolute after:left-1/4 after:-ml-1 after:border-4 after:border-solid after:border-r-transparent after:border-b-black after:border-l-transparent after:opacity-100 group-hover:visible group-hover:opacity-100">
                            900-00-00-00
                        </span>
                    </div>
                    <div className='email relative m-1 inline-block group-hover:text-black'>
                        {emailImage}
                        <span className='absolute top-[110%] left-1/2 z-50 -ml-8 mt-2 hidden rounded-md bg-black p-2 text-center text-white opacity-0'>
                            <a className='link'>z5512345z@gmail.com</a>
                        </span>
                    </div>
                </div>
                <div className=' absolute  top-0 right-0 bottom-0 left-0 flex flex-row content-center items-center justify-center'>
                    <Link
                        href='/webs/landing-hotel'
                        className='z-10 h-full bg-transparent text-black'
                        id='main'>
                        {svgFish}
                    </Link>
                </div>
                <div className='z-50 flex flex-row self-center group-hover:text-black'>
                    <div className='m-2 cursor-pointer border-white bg-white px-2 py-1 text-black group-hover:bg-black group-hover:text-white'>
                        Book now
                    </div>
                    <div className='hidden'>Book </div>
                </div>
            </div>
            <div className=' self-center tracking-widest'>
                <ul className='flex flex-row  '>
                    <li
                        className=' inline uppercase decoration-0 transition delay-75 ease-linear content-none hover:text-gray-500'
                        id='Ofertas'>
                        Offers
                    </li>
                    <li
                        id='Experiencias inline'
                        className="uppercase transition delay-75 ease-linear before:ml-1 before:mr-1 before:content-['•'] hover:text-gray-500  group-hover:before:text-black">
                        Experiences
                    </li>
                    <li
                        id='Acerca'
                        className="inline uppercase transition delay-75 ease-linear before:ml-1 before:mr-1 before:text-white before:content-['•'] hover:text-gray-500 group-hover:before:text-black ">
                        About us
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
