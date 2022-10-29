'use client'
import React, { useContext } from 'react'
import generateNormalGrid from './generateNormalGrid'
import { ColorContext } from './layout'
import { useRef } from 'react'
import { colores } from './colores'
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
                        <div
                            key={`${x}:${y}:${indiceArrayPosiciones}`}
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
                    )
                })}
            </div>
            <button onClick={() => generateProcessing()}>Hazme click</button>
        </>
    )
}
