import React, { useRef, useState } from 'react'
import generateTriangleGrid from '~/processing/generateTriangleGrid'
import ProcessingLayout from '~/processing/ProcessingLayout'
import { ReactElement } from 'react'
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
import { ColorContext } from '~/processing/ProcessingLayout'
import { useContext } from 'react'
export default function triangles() {
    // let colorActual = useContext(ColorContext)
    let colorActual = useContext(ColorContext)

    let triangleRef = useRef<HTMLDivElement>(null)
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let target = event.currentTarget //as HTMLDivElement
        if (!target) return
        target.style.fill = colorActual.color
    }

    function draw() {
        if (triangleRef.current) {
            console.log(generateTriangleGrid())

            triangleRef.current.innerHTML = generateTriangleGrid()
        }
    }
    return (
        <>
            <div
                ref={triangleRef}
                id='triangle'
                onClick={(event) => handleClick(event)}></div>
            <button onClick={(event) => draw()}>Click me</button>
        </>
    )
}

triangles.getLayout = function getLayout(page: ReactElement) {
    return <ProcessingLayout>{page}</ProcessingLayout>
}
