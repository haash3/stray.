import Marquee from "react-fast-marquee";

const MarqueeFeature = () => (
    <Marquee 
    className="bg-black text-white h-10 font-semibold tracking-widest uppercase" autoFill='true'
     pauseOnHover='true' speed={85} direction="left"
    >
    
     <span className="text-yellow-200 mx-2">Flash Sale!</span> 
     <p>GET 50% OFF ON OUR NEW ARRIVALS  </p> 
     <button className= 'marquee-button'>SHOP NOW</button>
     <p>GET 70% OFF ON YOUR FIRST PURCHASE </p> 
     <button className="marquee-button">SHOP NOW</button>
    </Marquee>
  );

  export default MarqueeFeature;