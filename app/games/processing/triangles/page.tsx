'use client'
import React, { useRef } from 'react'
import generateTriangleGrid from 'app/games/processing/triangles/generateTriangleGrid'
import { ColorContext } from '../layout'
import { useContext } from 'react'
export default function triangles() {
    let colorActual = useContext(ColorContext)
    let triangleRef = useRef<HTMLDivElement>(null)
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let target = event.target as HTMLDivElement
        if (!target) return
        target.style.fill = colorActual.color
    }

    function draw() {
        if (triangleRef.current) {
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
