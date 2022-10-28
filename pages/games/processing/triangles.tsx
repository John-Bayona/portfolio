import React, { useRef, useState } from 'react'
import generateTriangleGrid from '~/processing/generateTriangleGrid'
import ProcessingLayout from '~/processing/ProcessingLayout'
import { ReactElement } from 'react'
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
