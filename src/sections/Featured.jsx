import { featuredProducts } from "../constants";

const Featured = () => {
  return (
    <section id="products" className="max-sm:mt-5">
      <div
        className="flex flex-col justify-start
      gap-5"
      >
        <h2
          className="text-[30px] font-semibold
         tracking-tighter font-montserrat"
        >
          Featured
        </h2>
        <div
          className="mt-1 grid
       sm:grid-cols-3  grid-cols-1
       sm:gap-3 gap-10"
        >
          {featuredProducts.map((product) => (
            <div className="" key={product.name}>
              <a href="#Products">
                <img
                  src={product.imgURL}
                  alt="Featured Collection"
                  className="zoom-in "
                />
                <h2 className="text-[20px] tracking-wider font-palanquin mt-8">
                  {product.name}
                </h2>
              </a>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
