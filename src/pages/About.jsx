import React from 'react';
import Image from "../assets/about_img.jpg";
import Image_2 from "../assets/about_img2.jpg";
import bee5 from "../assets/bee5.png";
import bee4 from "../assets/bee4.png";
import bee3 from "../assets/bee3.png";
import honey1 from "../assets/honey1.png";
import Member1 from "../assets/Member1.jpg";
import Member2 from "../assets/Member2.jpg";
import Member3 from "../assets/Member3.jpg";


const About = () => {
  return (
<>
<div className='w-full h-auto relative'
id="about">

 <div className='w-full h-[200px] bg-About_Parallax mt-[100px] bg-fixed  bg-cover overflow-hidden  '>
<h2 className='text-center text-gray-200 text-[3rem] drop-shadow-lg font-bold mt-[50px]'>About Us</h2>
 </div>
 <img src={honey1} 
    className='absolute left-0 top-[550px] w-[150px] max-sm:top-[860px]'
    />
 <img src={bee5} 
    className='absolute right-[200px] top-[400px] w-[250px] max-lg:hidden'
    />
 <img src={bee4} 
    className='absolute right-[160px] top-[20vh] w-[100px] '
    />
 <img src={bee3} 
    className='absolute right-[160px] top-[150vh] w-[100px] max-sm:hidden '
    />


    <div
    className='w-[700px] h-auto mt-[100px] ml-[100px] text-[#5C4033] max-lg:w-full max-lg:ml-0 max-lg:p-[20px] max-lg:text-center relative '>

    <h2 className='text-center mb-[50px] font-bold'>Our Mission</h2>
    <p className='leading-8 max-lg:leading-9'>
    At  Honey <span className='text-[#FF9F00]'>Bliss</span>, our mission is to bring the natural sweetness and health benefits of pure, unadulterated honey to your table. We are  <span className='text-[#FF9F00]'>passionate</span> about beekeeping and dedicated to sustainability, ensuring that our practices not only produce the finest honey but also protect and nurture our vital <span className='text-[#FF9F00]'>bee</span> populations. We believe that quality starts with the bees. Our honey is harvested from carefully managed hives located in pristine, <span className='text-[#FF9F00]'>pesticide-free</span> environments. Each jar of <span className='text-[#FF9F00]'>honey</span>is a testament to the hard work of our bees and the meticulous care of our beekeepers. We use traditional methods to extract and bottle our honey, preserving its natural enzymes, antioxidants, and unique <span className='text-[#FF9F00]'>flavor</span> profiles.</p>


    </div>

 <div 
 className='flex gap-[10px] mt-[100px] max-lg:flex-col justify-evenly items-center '>
 <img src={Image} className="rounded-[20px] w-[500px] h-[300px] object-cover ml-[10px] max-lg:m-0 max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer"/>
 <img src={Image_2} className="rounded-[20px] w-[500px] h-[300px] object-cover max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer"/>
 </div>
 </div>

 <div 

 className='w-full h-auto bg-[#f4e8c6] mt-[100px] overflow-hidden text-[#5C4033]'>
  <h2 className='text-center text-[3rem] font-semibold mt-[50px] max-lg:p-[10px]'>Our Team Of Experts</h2>

  <div className='flex  mt-[100px] justify-evenly max-lg:flex-col '>
   <div
   >
   <img src={Member1} className="rounded-[20px] w-[500px] h-[300px] object-cover max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer max-lg:m-auto"/>
   <p className='text-center text-[#FF9F00] mt-[10px] mb-[10px]'>Beekeeper</p>
   <p className='font-bold text-center text-[1.2rem]'>Alexander Thompson</p>
   <p className='text-center  p-[30px]'>Lorem ipsum dolor sit amet <span className='font-bold'>consectetur</span> adipisicing elit. Ab culpa, voluptas voluptates id sed maiores velit eveniet minima consectetur hic quae inventore quidem esse tenetur soluta ratione eum dolorem  <span className='font-bold'>itaque.</span></p>
   </div>
   <div

   >

   <img src={Member2} className="rounded-[20px] w-[500px] h-[300px] object-cover max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer max-lg:m-auto"/>
   <p className='text-center text-[#FF9F00] mt-[10px] mb-[10px]'>Field Technician</p>
   <p className='font-bold text-center  text-[1.2rem]'>Benjamin Harris</p>
   <p className='text-center  p-[30px]'><span className='font-bold'>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Ab culpa, voluptas voluptates id sed <span className='font-bold'>maiores</span> velit eveniet minima consectetur hic quae inventore quidem esse tenetur soluta ratione <span className='font-bold'>eum</span> dolorem itaque.</p>
   </div>
   <div 
   >
   <img src={Member3} className="rounded-[20px] w-[500px] h-[300px] object-cover max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer max-lg:m-auto"/>
   <p className='text-center text-[#FF9F00] mt-[10px] mb-[10px]'>Apiary Manager</p>
   <p className='font-bold text-center  text-[1.2rem]'>Isabella Collins</p>
   <p className='text-center  p-[30px]'>Lorem ipsum <span className='font-bold'>dolor</span> sit amet consectetur adipisicing elit. Ab culpa, voluptas voluptates id sed maiores <span className='font-bold'>velit</span> eveniet minima consectetur hic quae <span className='font-bold'>inventore</span> quidem esse tenetur soluta ratione eum dolorem itaque.</p>
   </div>
 </div>
 </div>

</>
  )
}

export default About