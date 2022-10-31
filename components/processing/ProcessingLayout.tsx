import { createContext, PropsWithChildren } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
export const colores = [
    { nombre: 'Blanco', color: 'rgb(255,255,255)' },
    { nombre: 'amarillo', color: 'rgb(255, 200, 0)' },
    { nombre: 'amarillo verdoso', color: 'rgb(205, 200, 0)' },
    { nombre: 'verde claro', color: 'rgb(155, 200, 0)' },
    { nombre: 'naranja', color: 'rgb(255, 100, 0)' },
    { nombre: 'naranja claro', color: 'rgb(255, 150, 0)' },
    { nombre: 'naranja tierra (ocre)', color: 'rgb(225, 170, 0)' },
    { nombre: 'azul', color: 'rgb(80, 100, 200)' },
    { nombre: 'azul turquesa', color: 'rgb(90, 190, 200)' },
    { nombre: 'azul turquesa oscuro', color: 'rgb(20, 130, 150)' },
    { nombre: 'rojo', color: 'rgb(205, 30, 0)' },
    { nombre: 'gris oscuro', color: 'rgb(60, 60, 60)' },
    { nombre: 'gris', color: 'rgb(150, 150, 150)' },
    { nombre: 'gris claro', color: 'rgb(180, 180, 180)' },
]
export const ColorContext = createContext({
    nombre: 'black',
    color: 'rgb(255,255,255)',
})
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
            <Link className="ml-2" href='/games/processing/'>Vista Normal</Link>
            <Link href='/games/processing/triangles'>Vista Triángulos</Link>
            <ColorContext.Provider value={colorActual}>
                {children}
            </ColorContext.Provider>
        </>
    )
}
export default ProcessingLayout
