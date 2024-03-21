import React from 'react'
import { useMediaQuery } from '@react-hook/media-query';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bestSellers } from '../constants/products'

const BestSellers = () => {
  const isMobile = useMediaQuery('(max-width: 464px)');
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-tighter font-montserrat mb-5">
        Best Sellers
      </h2>
      <Carousel
       responsive={responsive}
      >
        {bestSellers.map((product) => (
          <div key={product.name} className="mr-3">
            <img
              src={product.imgURL}
              alt={product.name}
              className="w-full object-contain zoom-out"
              
            />
            <div className="mt-2 px-2 pb-2">
              <p className="text-[18px] font-semibold my-1">{product.name}</p>
            <p className="text-slate-500 my-1"> {product.category}</p>
            <p className="text-slate-950 my-1 text-[20px] font-semibold"> MRP : ₹ {product.price}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};
export default BestSellers