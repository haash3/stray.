import { topBrands } from "../constants"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section className=""
    >
      <div className="flex flex-col justify-start
                      gap-5">
        <h2 className="text-[30px] font-semibold
          font-montserrat">
          Our Top Brands
        </h2>
        <div className="mt-5 grid
                        sm:grid-cols-3  grid-cols-1
                         sm:gap-20 gap-10 font-montserrat font-extrabold">
          {topBrands.map((brand) => (
            <div className="h-20" key={brand.name}>
              <div className="text-[40px] zoom-out-text tracking-wider
                                font-palanquin mb-2 p-2 border-b
                               border-black 
                                 flex items-center">
                <img src={brand.imgURL} width={75} />
                {brand.name}

              </div>
            </div>
          ))}
        </div>
        <button className=" mt-10 text-start bg-black text-white w-32 px-4 py-2 font-palanquin uppercase tracking-widest">Shop Now</button>
      
      </div>

    </section>
  )
}

export default SuperQuality