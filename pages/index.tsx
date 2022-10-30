import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <>
            <main className='mx-auto mt-3 grid min-w-[500px] max-w-max grid-cols-2 place-content-center text-center'>
                <div className=''>
                    <p className='border-b-2 border-r-2 text-2xl'>Webs</p>
                    <ul className=''>
                        <li>
                            <Link href='/webs/conatel'>Conatel</Link>
                        </li>
                        <li>
                            <Link href='/webs/landing-hotel'>
                                Landing hotel
                            </Link>
                        </li>
                        <li>
                            <Link href='/webs/pokedex'>Pokedex</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='border-b-2 text-2xl'>Games</p>
                    <ul className=''>
                        <li>
                            <Link href='/games/color-picker'>Color picker</Link>
                        </li>
                        <li>
                            <Link href='/games/tic-tac-toe'>Tic tac toe</Link>
                        </li>
                        <li>
                            <Link href='/games/processing'>Processing</Link>
                        </li>
                    </ul>
                </div>
            </main>
            <h2 className='ml-2 mt-8 mb-4 text-center text-2xl'>Details</h2>
            <div className='ml-2 grid grid-cols-2'>
                <div className='m-2'>
                    <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
                        Landing hotel:
                    </h3>
                    <p>
                        This landing was actually my very first page I created.
                        I did it along the Pokedex to prove someone my level of
                        programming (which was very low since I had only been
                        studying it for like 2 months).
                    </p>
                    <p>
                        It was meant to be bigger but I was only given a week to
                        do it, and it was quite overwhelming since at the same
                        time I started using TypeScript and Tailwind.
                    </p>
                </div>
                <div className='m-2'>
                    <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
                        Pokedex:
                    </h3>
                    <p>
                        On this project I learned how to use fetch and got my
                        very first (and only) decent design. This one was very
                        fun to do because I had never used APIs. There was also
                        a problem moving it to this portfolio, since I did it
                        using Redux as per requested by the ones who were
                        testing me. Even at that time I felt Redux was overkill
                        for such a small page, but I do see the need of taking
                        the state out of react for this one. I will probably
                        move the pokemons to a db or try Zustand.
                    </p>
                </div>
                <div className='m-2'>
                    <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
                        Processing:
                    </h3>
                    <p>
                        This page is more like a "game" but it's actually
                        neither a game or a web. This project was born from a
                        necessity of a friend. She was meant to create some kind
                        of art for an exposition (
                        <a
                            className='underline'
                            href='https://www.pamplonaescultura.es/exposiciones/homenaje-a-jabier-villarreal/'>
                            this one
                        </a>
                        ) in honor of her deceased art teacher Jabier
                        Villarreal. She decided to do an embroidery proyect but
                        wanted to mix traditional basque art (basque embroidery
                        patterns) with modern technologies. So she ended up
                        doing it on processing, however it was quite tedious
                        since she had never studied programming before and
                        needed to create 625 tiles per canvas. At that moment I
                        decided to make it a little bit more automatic with some
                        loops. I was going to give it some extra styling so it
                        wasn't as ugly but she told me not to (blame her).
                    </p>
                    <p>
                        Creating this app was quite weird because I didn't opt
                        to make it 100% in the react way, the main reason being
                        the opposite of the Pokedex, the state would be so big
                        it's probably gonna be very bad for performance.
                    </p>
                </div>
                <div className='m-2'>
                    <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
                        Conatel:
                    </h3>
                    <p>
                        Yet another one of my first. My very first page done
                        from 0 with styling. It's a very simple copy of the
                        original (
                        <a className='underline' href='https://www.conatel.biz'>
                            conatel.biz
                        </a>
                        ). I finished a programming course and got in this
                        business for practices (80h, 4h a day for 4 weeks). They
                        used wordpress and didn't need much from me so by the
                        second day I already finished upgrading things and had
                        free time so I decided to copy their whole page,
                        changing some styling and grouping things differently. I
                        also ended up adding some more features that didn't get
                        into my copy (mainly Área privada). They were very nice
                        and I had a lot of fun with them, they even allowed me
                        to publish it here as my portfolio so I'm very thankful.
                    </p>
                </div>
                <div className='m-2'>
                    <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
                        Color picker:
                    </h3>
                    <p>
                        This game was actually something that popped up on my
                        instagram while I was in Conatel. It looked very fun to
                        do so I tried. It was quite fast and easy to do, but my
                        mind told me: You can make it harder (for no reason) so
                        I did. I added more color spaces, options for
                        difficulty... And it was madness at first. But very
                        funny to do in general.
                    </p>
                </div>
                <div className='m-2'>
                    <h3 className='mb-2 w-max border-b-2 border-black/20 text-xl'>
                        Tic tac toe:
                    </h3>
                    <p>
                        I actually limited myself with this one. It was meant to
                        be a 3x3 by default that could be expanded to nxn on
                        size. I decided implementing it 3x3 was enough (
                        <span className='decoration-dashed	'>
                            but someday probably it will be my next thing to
                            work on.
                        </span>
                        I actually finished it, yay ).
                    </p>
                    <p>
                        This project was also done while being on Conatel on my
                        free time.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home
