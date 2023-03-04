import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import profile from '../../assets/profile.jpg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import lichess from '../../assets/icons/lichess.svg'

export const Home = () => {
  return (
    <div className='block w-full md:w-3/4 lg:w-1/2 mx-auto'>
        <div className='flex flex-col items-center'>
            <img src={profile} alt="Rodrigo Fabián Andrés Fuentealba Cartes" className='w-48 rounded-full m-8' />
            <h1 className='text-2xl text-center font-sans font-semibold'>
                ¡Hola!
            </h1>
            <p className='text-base text-normal text-center font-sans mt-4'>
                Mi nombre es Rodrigo y soy un ser humano neurodisperso que trabaja
                en ciencia de datos, juega ajedrez y viaja en motocicleta.
            </p>
            <div className='flex flex-row items-center content-evenly mt-4'>
                <a href="" target='_blank'>
                    <img src={facebook} alt="" className='w-8' />
                </a>
                <a href="" target='_blank'>
                    <img src={instagram} alt="" className='w-8' />
                </a>
                <a href="" target='_blank'>
                    <img src={lichess} alt="" className='w-8' />
                </a>
            </div>
        </div>
    </div>
  )
}
