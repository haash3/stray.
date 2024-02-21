import React from 'react'
import BtnIcon from '../assets/icons/arrow-right.svg'


const Button = ({label}) => {
  return (
  <button className='gradient-bg  font-montserrat mx-2 py-2 px-5 rounded-full shadow-xl flex justify-center gap-4 items-center'>
    {label} <span> <img src={BtnIcon} alt="button icon" height={25}
    width={25}  className='shadow-xl rounded-full'/></span>
  </button>
  )
}

export default Button