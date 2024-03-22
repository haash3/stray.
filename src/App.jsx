import { Hero, Featured, TopBrands, BestSellers, OurStores,
Subscribe, } from "./sections";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import './app-scrollbar.css'
import MarqueeFeature from "./components/MarqueeFeature";


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
    <section className="padding-x py-10">
      <OurStores/> 
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