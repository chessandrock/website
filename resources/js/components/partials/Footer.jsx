import React from 'react'

import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const { t, i18n } = useTranslation('common')

    return (
        <div className='block mt-auto pt-4 pb-8 border-t border-gray-800'>
            <p className='text-xs text-center'>
                {t('footer.message', { year: new Date().getFullYear() })}
            </p>
            <p className='text-xs text-center'>{t('footer.allrights')}</p>
        </div>
    )
}
