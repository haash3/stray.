import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    
      <footer className="">
        <div className='flex  flex-1 justify-center items-start 
                        flex-wrap max-lg:gap-5 gap-10'>
                   {footerLinks.map((section)=>(
                      <div key={section}> 
                          <h4 className='font-extrabold
                           font-palanquin uppercase text-lg'>
                            
                            {section.title}</h4>
                          <ul className='mt-3'>{section.links.map((link)=>(
                            <li className='text-sm font-montserrat m-1'>
                              <a>{link.name}</a>
                            </li>
                          ))}</ul>
                      </div>
                   ))}       
        </div>
      </footer>
   
  )
}

export default Footer