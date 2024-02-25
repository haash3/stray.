import Marquee from "react-fast-marquee";

const MarqueeFeature = () => (
    <Marquee 
    className="bg-black text-white h-10 font-semibold tracking-widest uppercase" autoFill='true'
     pauseOnHover='true' speed={85} direction="right"
    >
     <span className="text-yellow-200 mx-2">Flash Sale!</span> GET 50% OFF ON OUR NEW ARRIVALS  <button className= 'marquee-button'>SHOP NOW</button>
     GET 70% OFF ON YOUR FIRST PURCHASE  <button className="marquee-button">SHOP NOW</button>
    </Marquee>
  );

  export default MarqueeFeature;