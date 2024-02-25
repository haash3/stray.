
import Button from '../components/Button'

const Hero = () => {


  return (
    <section
      id='home'
      className='w-full flex flex-col justify-end relative  lg:bg-banner1 bg-bannerSs bg-cover  min-h-screen'
    >
      <div className='pb-20'>
        <div className='banner-text px-20 mb-3 padding-x flex md:flex-col   gap-2'>
          <h1>Super Comfort.</h1>
          <h1>Super Stylish.</h1>
        </div>
        <p className='text-[#fffefe]  mb-5 padding-x tracking-wider  sm:text-[20px] text-[15px] font-montserrat'>
          Elevate your Style One step at a time
        </p>
        <Button label='Shop now' />

      </div>
    </section>
  )
}

export default Hero