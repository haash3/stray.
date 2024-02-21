import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
   <section
   id='home'
   className='w-full  flex xl:flex-row flex-col justify-center min-h-screen
   p-2 max-container '>
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
    <p className='text-lg gradient-bg py-1 px-2 rounded-full'>Our Summer Collection</p>
    <h1 className='text-8xl font-bold'>
      <span>The New Arrival</span>
      <br/>
      <span className='text-coral-red'>Stray</span> Shoes
    </h1>
    <p className='text-2xl py-4'>Elevate your style, one step at a time.</p>
    <Button/>
    </div>

   </section>
  )
}

export default Hero