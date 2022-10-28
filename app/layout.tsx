import FloatingNav from './FloatingNav'
import '../styles/globals.css'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head></head>
            <body>
                {children}
                <FloatingNav />
            </body>
        </html>
    )
}
