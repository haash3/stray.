import React from 'react'
import BtnIcon from '../assets/icons/right1.png'


const Button = ({label}) => {
  return (
  <button className='gradient-bg  font-montserrat mx-20 py-2 px-5 rounded-full border-2 shadow-xl flex justify-center gap-4 items-center'>
    {label} <span> <img src={BtnIcon} alt="button icon" height={25}
    width={25}  className='rounded-full'/></span>
  </button>
  )
}

export default Button