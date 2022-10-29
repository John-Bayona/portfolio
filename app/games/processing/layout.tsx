'use client'
import { useState, createContext } from 'react'
import { colores } from './colores'
import Link from 'next/link'
export const ColorContext = createContext({
    nombre: 'black',
    color: 'rgb(255,255,255)',
})
export default function LayoutProcessing({
    children,
}: {
    children: React.ReactNode
}) {
    const [colorActual, seleccionarColorActual] = useState({
        nombre: 'black',
        color: 'rgb(255,255,255)',
    })
    const cambiarColorSeleccionado = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        let target = event.currentTarget
        seleccionarColorActual(() => {
            return {
                nombre: target.innerHTML,
                color: target.style.backgroundColor,
            }
        })
    }
    return (
        <main>
            <div className=' pointer-events-none flex flex-wrap'>
                {colores.map(({ nombre, color }, indice) => {
                    return (
                        <div
                            key={`${color}:${nombre}_${indice}`}
                            color={color}
                            data-name={nombre}
                            className={`${
                                colorActual.nombre === colores[indice].nombre
                                    ? 'border-red border-b-[12px] text-black'
                                    : ''
                            }pointer-events-auto h-28 w-28 justify-center text-center`}
                            onClick={(event) => cambiarColorSeleccionado(event)}
                            style={{ backgroundColor: `${color}` }}>
                            {nombre}
                        </div>
                    )
                })}
            </div>
            <Link href='/games/processing/'>Vista Normal</Link>
            <Link href='/games/processing/triangles'>Vista Triángulos</Link>
            <ColorContext.Provider value={colorActual}>
                {children}
            </ColorContext.Provider>
        </main>
    )
}
