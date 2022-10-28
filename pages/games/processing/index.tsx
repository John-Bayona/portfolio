import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import ProcessingLayout from '~/processing/ProcessingLayout'
import type { ReactElement } from 'react'
import generateNormalGrid from '~/processing/generateNormalGrid'
import { ColorContext } from '~/processing/ProcessingLayout'
import { useRef } from 'react'
const colores = [
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
export default function Page() {
    let rootRef = useRef<HTMLDivElement>(null)
    let colorActual = useContext(ColorContext)
    let arrayPosiciones: { x: number; y: number }[] = generateNormalGrid()

    const cambiarColor = (id: number) => {
        let element = document.getElementById(id.toString())
        if (!element) return
        element.style.backgroundColor = colorActual.color
        element.setAttribute('data-color', colorActual.color)
    }

    const generateProcessing = () => {
        const ole = colores.map(({ color }) => {
            const cells = Array.from(
                document.querySelectorAll(`[data-color="${color}"]`)
            )

            const coordinates = cells.map((cell) => {
                const x = cell.getAttribute('data-x')
                const y = cell.getAttribute('data-y')
                return [x, y]
            })

            return { color, coordinates }
        })
        let text = ''
        ole.forEach(({ color, coordinates }) => {
            if (color != 'rgb(255,255,255)') {
                text += `fill${color.slice(3)};\n`
                console.log(text)
                coordinates.forEach(([x, y]) => {
                    text += `rect(${x}, ${y}, 20, 20);\n`
                })
            }
        })
        if (rootRef.current) {
            rootRef.current.textContent = text
        }
    }
    return (
        <>
            <br></br>
            <div ref={rootRef} className='whitespace-pre'></div>
            <br></br>
            <div className='content-left flex h-[1250px] w-[1250px] flex-wrap'>
                {arrayPosiciones?.map(({ x, y }, indiceArrayPosiciones) => {
                    return (
                        <>
                            <div
                                key={indiceArrayPosiciones}
                                className={`-mb-1 h-[50px] w-[50px] border border-black text-center `}
                                data-y={x}
                                data-x={y}
                                data-color='rgb(255,255,255)'
                                id={`${indiceArrayPosiciones}`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    cambiarColor(indiceArrayPosiciones)
                                }}
                                onDragStart={() => {
                                    cambiarColor(indiceArrayPosiciones)
                                }}>
                                {indiceArrayPosiciones + 1}
                            </div>
                        </>
                    )
                })}
            </div>
            <button onClick={() => generateProcessing()}>Hazme click</button>
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return <ProcessingLayout>{page}</ProcessingLayout>
}
