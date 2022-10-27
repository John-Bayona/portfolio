import { useState } from 'react'
const currentDate = new Date().toISOString().slice(0, 10)
type BoughtState = {
    adults: number
    children: number
    hotel: 'Tokoyama' | 'Tokyo' | 'Nagashima'
    date: string | Date
}
type Kind = keyof BoughtState
type Operation = BoughtState[Kind]
const Footer = () => {
    const [bought, setBought] = useState({
        adults: 1,
        children: 0,
        hotel: 'Tokoyama',
        date: currentDate,
    })

    function stateUpdate(type: Kind, operation: Operation) {
        console.log({ type, operation })
        if (typeof operation === 'string') {
            return setBought((previous) => {
                console.log({ ...previous, [type]: operation })
                return { ...previous, [type]: operation }
            })
        }
        if (
            typeof operation === 'number' &&
            (type === 'adults' || type === 'children')
        ) {
            let computed = bought[type] + operation
            if (computed < 0) return
            setBought((previous) => {
                return {
                    ...previous,
                    [type]: computed,
                }
            })
        }
    }
    const bookHotel = () => {
        let displayText = ''
        if (bought.adults > 0) {
            if (bought.children > 0) {
                displayText += `${bought.adults} ${
                    bought.adults > 1 ? 'adultos' : 'adulto'
                } y ${bought.children} ${
                    bought.children === 1 ? 'niños' : 'niño'
                }`
            } else {
                displayText += `${bought.adults} ${
                    bought.adults > 1 ? 'adultos' : 'adulto'
                }`
            }
        }
        if (bought.adults === 0 && bought.children === 0) {
            alert('Debe introducir al menos un niño o un adulto')
        } else {
            alert(
                `Ha elegido el hotel ${bought.hotel} para el día ${bought.date} para ${displayText}`
            )
        }
    }
    return (
        <div className=' fixed bottom-3 w-full content-center justify-items-center'>
            <div className='align-self-center mr-4 ml-4 flex flex-row items-center justify-center border bg-white p-1'>
                <div className=''>
                    <div className=' text-xs'>Hotels </div>

                    <select
                        className=' rounded-sm border-2 border-gray-500'
                        name='hotels'
                        id='hoteles'
                        onChange={(event) =>
                            stateUpdate('hotel', event.target.value as Kind)
                        }>
                        <option
                            onClick={() => {
                                stateUpdate('hotel', 'Tokoyama')
                            }}
                            value='Tokoyama'>
                            Tokoyama Hotel{' '}
                        </option>
                        <option
                            onClick={() => {
                                stateUpdate('hotel', 'Nagashima')
                            }}
                            value='Nagashima'>
                            Nagashima Hotel{' '}
                        </option>
                        <option
                            onClick={() => {
                                stateUpdate('hotel', 'Tokyo')
                            }}
                            value='Tokyo'>
                            Tokyo Hotel{' '}
                        </option>
                    </select>
                </div>
                <div>
                    <div className=' ml-1 text-xs'>Date </div>
                    <input
                        type='date'
                        name=''
                        value={bought.date || currentDate}
                        id='fechas'
                        className='ml-1 rounded-sm border-2 border-gray-500'
                        onChange={(event) => {
                            stateUpdate('date', event.target.value)
                        }}
                    />
                </div>
                <div className=' center mr-2 ml-2 flex flex-col text-center'>
                    <div className=' p-1 text-base'>Adults </div>
                    <div className='flex flex-row self-center'>
                        <button
                            className=' border-none bg-gray-400 p-1'
                            onClick={() => stateUpdate('adults', 1)}>
                            +
                        </button>
                        <button className='bg-white p-1'>
                            {bought.adults >= 0 ? bought.adults : 0}
                        </button>
                        <button
                            className=' h-1/2 border-none bg-gray-400 p-1'
                            onClick={() => stateUpdate('adults', -1)}>
                            -
                        </button>
                    </div>
                </div>
                <div className=' center mr-1 ml-1 flex flex-col text-center'>
                    <div className=' p-1 text-base'>Children </div>
                    <div className='flex flex-row self-center'>
                        <button
                            className=' border-none bg-gray-400 p-1'
                            onClick={() => stateUpdate('children', 1)}>
                            +
                        </button>
                        <button className='bg-white p-1'>
                            {bought.children >= 0 ? bought.children : 0}
                        </button>
                        <button
                            className=' border-none bg-gray-400 p-1'
                            onClick={() => stateUpdate('children', -1)}>
                            -
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        className='self-center bg-gray-400 p-1'
                        onClick={bookHotel}>
                        Check this date
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer
