import { createContext, PropsWithChildren } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

function ProcessingLayout({ children }: PropsWithChildren) {
    const [colorActual, seleccionarColorActual] = useState({
        nombre: 'black',
        color: 'rgb(255,255,255)',
    })
    const cambiarColorSeleccionado = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        let target = event.currentTarget
        seleccionarColorActual((prev) => {
            return {
                nombre: target.innerHTML,
                color: target.style.backgroundColor,
            }
        })
    }
    return (
        <>
            <div className=' pointer-events-none flex flex-wrap'>
                {colores.map(({ nombre, color }, indice) => {
                    return (
                        <div
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
        </>
    )
}
export default ProcessingLayout
