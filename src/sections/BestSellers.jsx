import React from 'react'
import { bestSellers } from '../constants/products'

const BestSellers = () => {
  return (
    
    <section>
       <h2 className="text-[30px] font-semibold
         tracking-tighter font-montserrat">
          Best Sellers
        </h2>
      <div className='mt-5'>
        {bestSellers.map((product)=>(
          <div key={product.name}>
             <img src={product.imgURL} width={350}
             
             />
             <p>{product.name}</p>

             <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSellers