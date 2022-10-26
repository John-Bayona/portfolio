import { useEffect, useState } from 'react'
import checkWinner from '../../components/tick-tack-toe/checkWinner'
export type Players = '✕' | '○'
export type Options = 'empty' | '✕' | '○'
export type Selected = { selected: Array<Options>; player: Players }
const TicTacToe = () => {
    const [{ selected, player }, setSelected] = useState<Selected>({
        selected: [
            'empty',
            'empty',
            'empty',
            'empty',
            'empty',
            'empty',
            'empty',
            'empty',
            'empty',
        ],
        player: '○',
    })
    //This looks like a mistake but canClick has nothing to do with state or page rendering,
    // just if you can click on an element or no and should be reset everytime something gets rendered
    let canClick = true

    function handleClick(index: number) {
        if (selected[index] === 'empty') {
            setSelected(
                ({ selected: currentSelected, player: currentPlayer }) => {
                    return {
                        selected: currentSelected.map(
                            (el: Options, i: number) => {
                                if (index === i) return player
                                return el
                            }
                        ),
                        player: currentPlayer === '✕' ? '○' : '✕',
                    }
                }
            )
        }
    }
    function restart(isTie = false) {
        alert(isTie ? 'Empate :(' : `Congrats ${player === '✕' ? '○' : '✕'}`)
        setSelected({
            selected: [
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
                'empty',
            ],
            player: '✕',
        })
    }
    useEffect(() => {
        let timeOut: NodeJS.Timeout | number
        if (checkWinner(player, selected)) {
            canClick = false
            timeOut = setTimeout(restart, 2000)
        }
        let isFilled = selected.every((value) => value === '✕' || value === '○')
        if (isFilled && !checkWinner(player, selected)) {
            canClick = false
            timeOut = setTimeout(() => restart(true), 2000)
        }
        return () => {
            if (timeOut) clearTimeout(timeOut)
        }
    }, [player, selected])

    return (
        <>
            <div className=' my-auto flex h-screen content-center justify-center'>
                <div className=' grid place-content-center'>
                    <div className='grid grid-cols-3 content-center text-center text-9xl'>
                        {selected.map((element, i) => {
                            if (i === 9) return
                            return (
                                <div
                                    key={i}
                                    onClick={() => canClick && handleClick(i)}
                                    className='m-2 h-32 w-32 bg-gray-500'>
                                    {selected[i] != 'empty'
                                        ? selected[i] === '✕'
                                            ? '✕'
                                            : '○'
                                        : ''}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TicTacToe
