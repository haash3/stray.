import React, { useState } from 'react'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import {  shoes, statistics } from '../constants/index'
import { heroShoe1 } from '../assets/images'






const Hero = () => {
  const [heroShoe, setHeroShoe] =useState(heroShoe1)

  return (
    <section
      id='home'
      className='w-full bg-banner mx-0 bg-cover lg:text-center min-h-screen'>
      <div className=' flex flex-col justify-center items-center w-full max-xl:padding-x pt-28'>
        <h1 className='text-8xl text-stone-300/75 font-montserrat font-semibold'>
          Walk To 
        </h1>
        <h1 className='text-8xl text-stone-300/75 font-montserrat font-semibold'>
           Your Own Beat
        </h1>
        <Button label='Shop now' />

        
      </div>
      {/* Shoe display section */}

     

          
        
    </section>
  )
}

export default Hero