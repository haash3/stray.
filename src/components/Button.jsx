import React from 'react'
import BtnIcon from '../assets/icons/arrow-right.svg'

const Button = () => {
  return (
  <button className='bg-coral-red py-2 px-4 rounded-full shadow-xl flex justify-evenly gap-2 items-center'>
    Shop now <span> <img src={BtnIcon} alt="button icon"  className='shadow-xl'/></span>
  </button>
  )
}

export default Button