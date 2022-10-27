import Navbar from './Navbar'
import { PropsWithChildren } from 'react'
import Footer from './Footer'
import FloatingNav from '../FloatingNav'

export default function HotelLayout({ children }: PropsWithChildren) {
    return (
        <>
            <main>
                <Navbar />
                {children}
                <Footer />
                <FloatingNav />
            </main>
        </>
    )
}
