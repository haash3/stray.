import { Hero, Featured, TopBrands, BestSellers, SpecialOffer,
Subscribe, Footer, CustomerReviews,Copyright } from "./sections";
import Nav from './components/Nav';
import './app-scrollbar.css'
import MarqueeFeature from "./sections/MarqueeFeature";


const App = () =>(

  <main className="custom-scrollbar">
    <MarqueeFeature/>
    <Nav/>
    <section className="">
      <Hero/>
    </section>
    <section className="padding-x py-10">
      <Featured/> 
    </section>
    <section className="padding-x py-10 bg-black/5">
      <TopBrands/> 
    </section>
    <section className="padding-x py-10">
      <BestSellers/>
    </section>
    <section className="padding">
      <SpecialOffer/> 
    </section>
    <section className="padding">
      <CustomerReviews/> 
    </section>
    <section className="padding-x w-full pt-10 pb-10 bg-yellow-400/50 ">
      <Subscribe/>
    </section>
    <section className="padding bg-black/5">
      <Footer/>
    </section>
    <section className="padding-x w-full pt-10 pb-10 bg-black/90">
      <Copyright/>
    </section>
  </main>

)





export default App;