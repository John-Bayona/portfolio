import { PropsWithChildren } from 'react'
import Navbar from './Navbar'

function ConatelLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main className=''>{children}</main>
            <div className='m-10'></div>
        </>
    )
}
export default ConatelLayout
