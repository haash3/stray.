import React from 'react'
import { useMediaQuery } from '@react-hook/media-query';

import { footerLinks, ssFooterLinks } from '../constants'

const Footer = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)')
  return (
    <>
      {isSmallScreen? (
 <footer className='md:hidden' >
 <div className=''>
       <div className=' h-[125px]  flex  flex-col  flex-wrap
       justify-start items-center gap-5 cursor-pointer'>
         {ssFooterLinks.map((link)=>(
           <div key={link.title} className=' md:w-1/2'> 
               <ul>
                 <li>{link.title}</li>
               </ul>
           </div>
         ))}

       </div>

     </div>
 </footer>
      ) : (
<footer className="hidden md:flex">
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
      
         
     
   </>
  )
}

export default Footer