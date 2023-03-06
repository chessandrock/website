import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import profile from '../../assets/profile.jpg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import twitch from '../../assets/icons/twitch.svg'
import discord from '../../assets/icons/discord.svg'
import youtube from '../../assets/icons/youtube.svg'
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
            <div className='flex flex-row  w-full items-center justify-around mt-8'>
                <a href="" target='_blank' className='block text-center'>
                    <img src={facebook} alt="" className='w-8' />
                </a>
                <a href="" target='_blank' className='block text-center'>
                    <img src={instagram} alt="" className='w-8' />
                </a>
                <a href="" target='_blank' className='block text-center'>
                    <img src={twitter} alt="" className='w-8' />
                </a>
                <a href="" target='_blank' className='block text-center'>
                    <img src={linkedin} alt="" className='w-8' />
                </a>
                <a href="" target='_blank' className='block text-center'>
                    <img src={github} alt="" className='w-8' />
                </a>
                <a href="" target='_blank' className='block text-center'>
                    <img src={twitch} alt="" className='w-8' />
                </a>
                <a href="" target='_blank' className='block text-center'>
                    <img src={discord} alt="" className='w-8' />
                </a>
                <a href="" target='_blank' className='block'>
                    <img src={youtube} alt="" className='w-8' />
                </a>
                <a href="" target='_blank' className='block'>
                    <img src={lichess} alt="" className='w-8' />
                </a>
            </div>
        </div>
    </div>
  )
}
