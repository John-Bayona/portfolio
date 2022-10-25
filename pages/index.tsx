import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <>
            <main>
                <div>
                    <p>Webs</p>
                    <ul>
                        <li>
                            <Link href='/webs/conatel'>Conatel</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Games</p>
                    <ul>
                        <li>
                            <Link href='/games/color-picker'>Color picker</Link>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Home
