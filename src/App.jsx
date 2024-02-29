import { Hero, Featured, TopBrands, Services, SpecialOffer,
Subscribe, Footer, CustomerReviews } from "./sections";
import Nav from './components/Nav';
import './app-scrollbar.css'
import MarqueeFeature from "./sections/MarqueeFeature";


const App = () =>(

  <main className="custom-scrollbar" >
    <MarqueeFeature/>
    <Nav/>
    <section className="">
      <Hero/>
    </section>
    <section className="padding">
      <Featured/> 
    </section>
    <section className="padding">
      <TopBrands/> 
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/> 
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews/> 
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>

)





export default App;