'use client'
import Link from 'next/link'
import { useState } from 'react'
type ProjectType = {
    name: string
    slug: string
    original?: string
    img?: string
    optional?: string
}
const FloatingNav = () => {
    let projectArray: ProjectType[] = [
        {
            img: '/logo.png',
            name: 'Conatel Telecomunicaciones',
            original: 'https://conatel.biz',
            slug: '/webs/conatel',
            optional:
                "Conatel is where I did some 'programming' practices after finishing a programming course. (Mostly wordpress-related)",
        },
        {
            name: 'Color picker',
            slug: '/games/color-picker',
            optional: 'It has difficulties and options, wohoo',
        },
        {
            name: 'Tick tack toe',
            slug: '/games/tick-tack-toe',
            optional: 'The game you have probably played tons of times already',
        },
        {
            name: 'Landing hotel',
            slug: '/webs/landing-hotel',
            optional:
                "This was done for someone who wanted to see how much I could do back then when I was in programming for like 1 month, don't expect much ",
        },
        {
            name: 'Pokedex',
            slug: '/webs/pokedex',
            optional:
                "Same as the landing, someone requested me to test this. The original project used redux but I felt it was an overkill. It's very slow since there are so many images and fetches, be careful.",
        },
        {
            name: 'Processing for a friend',
            slug: '/games/processing',
            optional:
                'This was made for a friend that had to do an art exposition and wanted it to be digitally made so I made her life a little bit easier by adding this with a palette she created. Later I added a perspective grid to do the same but without generating code for processing.',
        },
    ]
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen((state) => !state)
    }
    return (
        <div className='z-50'>
            <div
                onClick={handleClick}
                className={`' fixed bottom-4 right-9 inline-block rounded-full border-2 border-solid border-black bg-gray-300 p-3 text-center font-semibold transition-[width] duration-700 hover:bg-slate-500  ${
                    isOpen ? 'w-3/4' : 'w-36'
                } `}>
                <span
                    className={`inline-block text-xl font-bold transition-transform duration-300 ${
                        isOpen ? 'rotate-180 ' : 'translate-y-1'
                    }`}>
                    ^
                </span>{' '}
                Other pages
            </div>
            <div
                className={`fixed right-9 bottom-20 z-50 h-3/4 w-3/4 bg-gray-400 ${
                    isOpen ? '' : '-right-full '
                } scrollbar overflow-auto rounded-md p-2 transition-all duration-700`}>
                {projectArray.map(
                    ({ img, name, optional, original, slug }, index) => {
                        if (index < 7)
                            return (
                                <Link key={index} href={slug} legacyBehavior>
                                    <div className='m-2 flex  flex-col rounded-md border-2 p-2'>
                                        <div className='flex items-center text-center'>
                                            {img ? (
                                                <img
                                                    src={img}
                                                    className='mr-2 w-24'
                                                />
                                            ) : (
                                                <div className='my-auto mr-2 flex h-24 w-24 shrink-0 items-center justify-center bg-white'>
                                                    {name
                                                        .split(' ')
                                                        .map((el) =>
                                                            el
                                                                .charAt(0)
                                                                .toUpperCase()
                                                        )
                                                        .join(' ')}
                                                </div>
                                            )}
                                            <div className='mx-auto'>
                                                <h2 className='font-semibold'>
                                                    {name}
                                                </h2>
                                                {optional && <p>{optional}</p>}
                                            </div>
                                        </div>
                                        <span className='text-sm font-light italic underline'>
                                            {original}
                                        </span>
                                    </div>
                                </Link>
                            );
                    }
                )}
            </div>
        </div>
    );
}

export default FloatingNav
