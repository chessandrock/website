import React from 'react'

import { Header } from './components/partials/Header'
import { Main } from './components/partials/Main'
import { Footer } from './components/partials/Footer'

export const App = () => {
    return (
        <div className='container xs:p-2 xs:w-full sm:w-3/4 mx-auto flex flex-col h-screen justify-between'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
