import { PropsWithChildren } from 'react'
import Navbar from './Navbar'

function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main className=''>{children} why</main>
            <div className='m-10'></div>
        </>
    )
}
export default Layout
