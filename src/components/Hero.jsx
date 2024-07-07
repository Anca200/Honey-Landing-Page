import React, {useEffect} from 'react';
import Hero_Image from "../assets/Hero_Image.png";
import SVG_Line from "../assets/SVG_Line.png";
import Honey_Comb from "../assets/Honey_Comb.png";
import Flying_Bee from "../assets/Flying_Bee.png";
import AOS from "aos";
import "aos/dist/aos.css";


{/*For AOS Animation*/}

const Hero = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
 },[])

  return (
<>
<div className='w-full h-auto bg-[#FFF7E1] text-[#5C4033]'>

  {/*Container Hero */}

 <div className='grid grid-cols-1 lg:grid-cols-2 items-center relative '>
 <img className='hidden lg:w-[400px] lg:top-[400px] lg:absolute lg:block' src={Honey_Comb} alt="Honeycomb Image"/>
<img className='absolute w-[400px] bottom-[10px] max-md:left-0 max-lg:left-[100px] max-lg:w-[500px] lg:left-[500px]  lg:bottom-[100px]' src={Flying_Bee} alt="Flying Bee Image"/>

{/*Container Text*/}

 <div data-aos="fade-right" data-aos-duration="1000" 
      className='text-center w-full h-auto z-10 lg:w-[500px] lg:h-[500px] lg:m-auto '>

  <h1 className='text-[1.8rem] mt-[50px] z-20 font-bold lg:text-[2rem] lg:relative'>Discover the Sweetness of <br></br> <img className="absolute w-[100px] left-[150px] top-[100px] z-10 lg:top-[60px] lg:left-[210px] md:left-[320px] " src={SVG_Line}/> <span className='z-[10] relative text-[1.8rem]'>Nature</span></h1>

  <p className='leading-7 mt-[20px] font-semibold w-[90%] m-auto text-left'>Indulge in the pure, golden delight of our artisan honey. Sourced sustainably and crafted with care, our honey brings the natural flavors of the hive straight to your table. Taste the difference of premium, raw honey and experience the sweetness of nature like never before.</p>
 <div>
 </div>

 {/*Button*/}

 <a href="#products"> <button className="bg-btn rounded-[20px] font-bold  w-[200px]  h-[50px] mt-[50px] text-[#5C4033]  text-[1.2rem] cursor-pointer">Taste The Sweetness</button></a>
  </div>
      
      {/*Hero Image Right*/}
      
     <div className='relative  '> 
      <img className='object-cover w-[350px] mt-[50px] drop-shadow-2xl m-auto lg:w-[600px] z-[10] lg:relative'
      src={Hero_Image} alt="Honey Image"
      />
    </div>
    </div>
  </div>
</>
  )
}

export default Hero