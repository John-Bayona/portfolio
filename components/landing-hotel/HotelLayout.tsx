import Navbar from './Navbar'
import { PropsWithChildren } from 'react'
import Footer from './Footer'

export default function HotelLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
