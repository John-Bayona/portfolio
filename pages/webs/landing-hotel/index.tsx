import React from 'react'
import HotelLayout from '~/landing-hotel/HotelLayout'
import { ReactElement } from 'react'
import Main from '~/landing-hotel/Main'
function main() {
    return <Main />
}

export default main
main.getLayout = function getLayout(page: ReactElement) {
    return <HotelLayout>{page}</HotelLayout>
}
