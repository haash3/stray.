import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bestSellers } from '../constants/products'

const BestSellers = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-tighter font-montserrat mb-5">
        Best Sellers
      </h2>
      <Slider {...settings}>
        {bestSellers.map((product) => (
          <div key={product.name} className="m-2 p-3 zoom-out">
            <img
              src={product.imgURL}
              alt={product.name}
              className="w-full object-contain"
            />
            <div className="mt-2">
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default BestSellers