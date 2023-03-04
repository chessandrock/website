import React from 'react'

import profile from '../../assets/profile.jpg'

export const Home = () => {
  return (
    <div className='block w-full md:w-3/4 lg:w-1/2 mx-auto'>
        <div className='flex flex-col items-center'>
            <img src={profile} alt="Rodrigo Fabián Andrés Fuentealba Cartes" className='w-48 rounded-full m-8' />
            <h1 className='text-2xl text-center font-sans font-semibold'>
                ¡Hola!
            </h1>
            <p className='text-base text-normal text-center font-sans mt-4'>
                Mi nombre es Rodrigo Fuentealba Cartes y soy un ser humano neurodisperso que trabaja
                en estadística y ciencia de datos, juega ajedrez y viaja en motocicleta.
            </p>
        </div>
    </div>
  )
}
