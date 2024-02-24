import React, { useState } from 'react'
import Button from '../components/Button'











const Hero = () => {
 

  return (
    <section
      id='home'
      className='w-full flex flex-col justify-end pb-20 relative md:bg-banner1 bg-bannerSs mx-0 bg-cover  min-h-screen'>
      <div className=' flex  padding-x flex-col  items-start w-full max-xl:padding-x pt-28'>
        <h1 className='md:text-[40px] px-20 text-[25px] md:text-wrap tracking-tighter uppercase  text-white font-montserrat leading-3 font-bold'>
          SuperComfort.
        </h1>
        <h1 className='md:text-[40px] px-20 text-[25px] tracking-tighter md:text-wrap uppercase  text-white font-montserrat font-bold'>
          SuperStylish.
        </h1>
        <p className='text-sky-950  px-20 font-palanquin'>Elevate your Style One step at a time</p>
       
        
        <Button label='Shop now' />

        
      </div>
      {/* Shoe display section */}

     

          
        
    </section>
  )
}

export default Hero