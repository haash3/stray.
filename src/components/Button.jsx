import React from 'react'
import BtnIcon from '../assets/icons/right1.png'


const Button = ({label}) => {
  return (
  <button className=' py-2 px-3 md:ml-28 ml-8 border-2 bg-white font-semibold shadow-color-shadow flex justify-between gap-2 uppercase items-center font-palanquin tracking-widest text-sky-950'>
    {label} <span> 
      <img src={BtnIcon} alt="button icon" height={25}
    width={25}/></span>
  </button>
  )
}

export default Button