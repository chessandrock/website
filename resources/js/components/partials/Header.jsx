import React from 'react'

import { NavBar } from './NavBar'

export const Header = () => {
    return (
        <header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm p-4 dark:bg-gray-800 border-b border-gray-700'>
            <nav
                className='w-full mx-auto sm:flex sm:items-center sm:justify-between'
                aria-label='Global'
            >
                <a
                    className='flex-none text-xl font-semibold dark:text-white'
                    href='#'
                >
                    Chess & Rock
                </a>
                <NavBar />
            </nav>
        </header>
    )
}
