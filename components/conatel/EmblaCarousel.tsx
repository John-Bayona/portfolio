import Image from "next/legacy/image";
import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
export type Structure = { structure: JSX.Element }
type Elements = { props: [string, Structure[]] }

function EmblaCarousel({ props: [bgImage, structure] }: Elements) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            containScroll: 'keepSnaps',
            inViewThreshold: 0,
        },
        [
            Autoplay({
                delay: 4000,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
            }),
        ]
    )
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>
            <div className='bg-lineas mb-4'>
                <div className='embla '>
                    <Image
                        src={bgImage}
                        width='100'
                        height='100'
                        layout='fill'
                        className='fixed block w-full object-cover object-center'
                    />
                    <div className='embla__viewport text-xl' ref={emblaRef}>
                        <div
                            className='embla__container'
                            // onMouseLeave={test}
                            // onMouseUp={test}
                        >
                            <div className='embla__slide grid place-content-center'>
                                {structure[0].structure}
                            </div>
                            <div className='embla__slide mx-auto grid place-content-center'>
                                {structure[1].structure}
                            </div>
                        </div>
                    </div>
                    <button
                        className='embla__button embla__button--prev'
                        onClick={scrollPrev}>
                        <svg
                            className='embla__button__svg'
                            viewBox='137.718 -1.001 366.563 644'>
                            <path d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z' />
                        </svg>
                    </button>
                    <button
                        className='embla__button embla__button--next'
                        onClick={scrollNext}>
                        <svg
                            className='embla__button__svg'
                            viewBox='0 0 238.003 238.003'>
                            <path d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z' />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
export default EmblaCarousel
