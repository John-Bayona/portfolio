export type ColorSpace = 'HSL' | 'RGB' | 'RGBA' | 'HEX'
import getCorrectColor from './getCorrectColor'
//This was spread between the functions getCorrectColor, getVariantColor for clarity and readability.
export default function getColor(type: ColorSpace, hardness: number) {
    switch (type) {
        case 'HSL':
            let HSL = [360, 100, 100]
            let HSLOriginalColor = getCorrectColor(HSL, hardness)
            let HSLColorString = 'hsl' + HSLOriginalColor.originalColor
            let HSLVariants = HSLOriginalColor.totalColors.map(
                (el) => 'hsl' + el
            )
            return { originalColor: HSLColorString, variants: HSLVariants }
        case 'RGB':
            let RGB = [255, 255, 255]
            let RGBOriginalColor = getCorrectColor(RGB, hardness)
            let RGBColorString = 'rgb' + RGBOriginalColor.originalColor
            let RGBvariants = RGBOriginalColor.totalColors.map(
                (el) => 'rgb' + el
            )
            return { originalColor: RGBColorString, variants: RGBvariants }
        case 'RGBA':
            let RGBA = [255, 255, 255, 100]
            let RGBAOriginalColor = getCorrectColor(RGBA, hardness)
            let RGBAColorString = 'rgba' + RGBAOriginalColor.originalColor
            let RGBAvariants = RGBAOriginalColor.totalColors.map(
                (el) => 'rgba' + el
            )
            return { originalColor: RGBAColorString, variants: RGBAvariants }
        case 'HEX':
            let HEX = [255, 255, 255]
            let HEXOriginalColor = getCorrectColor(HEX, hardness, true)
            let HEXColorString = '#' + HEXOriginalColor.originalColor
            let HEXvariants = HEXOriginalColor.totalColors.map((el) => '#' + el)
            return { originalColor: HEXColorString, variants: HEXvariants }

        default:
            throw Error('Unsupported type')
    }
}
