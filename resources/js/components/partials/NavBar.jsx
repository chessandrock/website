import React from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const NavBar = () => {
    const { t, i18n } = useTranslation('common')

    return (
        <div
            id='navbar-collapse-with-animation'
            className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
        >
            <div className='flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:mt-0 sm:pl-7'>
                <Link
                    className='font-medium text-blue-900 hover:text-neutral-700 hover:bg-gray-100 px-4 sm:py-6'
                    to='/'
                >
                    {t('menu.home')}
                </Link>
                <Link
                    className='font-medium text-blue-900 hover:text-neutral-700 hover:bg-gray-100 px-4 sm:py-6'
                    to='/about'
                >
                    {t('menu.about')}
                </Link>
                <Link
                    className='font-medium text-blue-900 hover:text-neutral-700 hover:bg-gray-100 px-4 sm:py-6'
                    to='/blog'
                >
                    {t('menu.blog')}
                </Link>
                <Link
                    className='font-medium text-blue-900 hover:text-neutral-700 hover:bg-gray-100 px-4 sm:py-6'
                    to='/projects'
                >
                    {t('menu.projects')}
                </Link>
                <Link
                    className='font-medium text-blue-900 hover:text-neutral-700 hover:bg-gray-100 px-4 sm:py-6'
                    to='/contact'
                >
                    {t('menu.contact')}
                </Link>
                <div className='hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] px-4 sm:py-4 '>
                    <button
                        type='button'
                        className='flex items-center w-full text-blue-900 hover:text-neutral-700 font-medium'
                    >
                        {t('menu.language')}
                        <svg
                            className='ml-2 w-2.5 h-2.5'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                            ></path>
                        </svg>
                    </button>
                    <div className='hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5'>
                        <a
                            className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                            onClick={() => i18n.changeLanguage('es')}
                        >
                            {t('menu.language_es')}
                        </a>
                        <a
                            className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-blue-900 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                            onClick={() => i18n.changeLanguage('en')}
                        >
                            {t('menu.language_en')}
                        </a>
                    </div>
                </div>
                <Link
                    className='flex items-center gap-x-2 font-medium text-blue-900 hover:text-neutral-700 sm:border-l sm:border-neutral-700 sm:my-6 sm:pl-6'
                    to='/'
                >
                    <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='#1e3a8a'
                        viewBox='0 0 16 16'
                    >
                        <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z' />
                    </svg>
                    {t('menu.login')}
                </Link>
            </div>
        </div>
    )
}
