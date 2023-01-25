import React from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const NavBar = () => {
    const { t, i18n } = useTranslation('common')

    return (
        <div className='flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5'>
            <Link
                className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
                to='/'
            >
                { t('menu.home') }
            </Link>
            <Link
                className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
                to='/about'
            >
                { t('menu.about') }
            </Link>
            <Link
                className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
                to='/blog'
            >
                { t('menu.blog') }
            </Link>
            <Link
                className='font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
                to='/contact'
            >
                { t('menu.contact') }
            </Link>
        </div>
    )
}
