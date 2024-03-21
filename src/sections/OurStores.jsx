import React from "react";
import { ourStores } from "../constants";

const OurStores = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-tighter font-montserrat mb-5">
        Our Stores
      </h2>

      <div
        className="mt-1 grid
       sm:grid-cols-2  grid-cols-1
       sm:gap-3 gap-10"
      >
         {ourStores.map((store) => (
            <div className="relative" key={store.name}>
                <img className='hover:brightness-75 zoom-in'
                  src={store.imgURL}
                />
                <p className='text-[30px] 
                 font-palanquin font-semibold tracking-widest
                  text-black'>{store.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default OurStores;
