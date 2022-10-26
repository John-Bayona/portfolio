import React from 'react'
import HotelLayout from '../../../components/landing-hotel/HotelLayout'
import { ReactElement } from 'react'
import Main from '../../../components/landing-hotel/Main'
function main() {
    return <Main />
}

export default main
main.getLayout = function getLayout(page: ReactElement) {
    return <HotelLayout>{page}</HotelLayout>
}
