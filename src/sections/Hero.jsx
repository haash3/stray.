import React from 'react'
import Button from '../components/Button'
import { statistics } from '../constants/index'
import {bigShoe} from '../assets/images'






const Hero = () => {

  return (
   <section
   id='home'
   className='w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
    <h1 className='mt-5  text-8xl font-bold max-sm:text-[72px] font-palanquin leading-none'>
      <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
      <br/>
      <span className='gradient-txt inline-block mt-3 mb-3 pt-3 pb-3'>Stray</span> Shoes
    </h1>
    <p className='text-xl my-4 mx-2 font-montserrat'>Elevate your style, one step at a time.</p>
    <Button label='Shop now'/>
    

    <div className='flex justify-start items-start flex-wrap w-full mt-10 gap-16  font-montserrat'>
    {statistics.map((item, index)=>(
      <div key={index}>
       <p className='text-4xl font-bold'>
       {item.value}
        </p> 
        <p className=' text-coral-red'>
        {item.label}
        </p>
      </div>

    )
    )}
    </div>
    </div>
      <div className='relative  flex-1 flex justify-center items-center 
      xl:min-h-screen max-xl:py-40  bg-red-200 rounded-full bg-center'>
        <img src={bigShoe} 
        width={500}
        height={700} 
        className='object-contain relative drop-shadow-2xl  z-10'
        />
      </div>
   </section>
  )
}

export default Hero