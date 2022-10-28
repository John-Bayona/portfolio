import ColorPicker, { Options } from './color-picker'
import getColor from './getColor'

export default function colorPicker() {
    let props: Options = {
        color: getColor('HSL', 0.5),
        selectedColorSpace: 'HSL',
        didWin: null,
        difficulty: 0.5,
    }

    return <ColorPicker {...props} />
}
