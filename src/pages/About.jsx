import React from 'react';
import About_Image1 from "../assets/about_img.jpg";
import About_Image2 from "../assets/about_img2.jpg";

import Honey_Drop from "../assets/Honey_Drop1.png";
import Member1 from "../assets/Member1.jpg";
import Member2 from "../assets/Member2.jpg";
import Member3 from "../assets/Member3.jpg";


const About = () => {
  return (
<>
<div className='w-full h-auto relative'
id="about">

{/*Title*/}

 <div className='bg-About_Parallax  bg-fixed  bg-cover overflow-hidden w-full h-[100px]  mt-[100px] lg:h-[200px] '>
<h2 className='text-center text-gray-200 text-[2.5rem] font-bold mt-[10px] lg:mt-[50px] lg:text-[3rem]'>About Us</h2>
 </div>

 {/*Images*/}
 <img src={Honey_Drop}  alt="Drop Of Honey Image"
    className='absolute w-[150px] bottom-[600px] lg:left-0 lg:top-[550px] '
    />
 <img src={About_Bee3} alt="Image Of A Bee"
    className='absolute right-[200px] top-[400px] w-[250px] max-lg:hidden'
    />
 <img src={About_Bee2}  alt="Image Of A Bee"
    className='absolute w-[80px] ml-auto mr-auto left-0 right-0 lg:right-[60px] lg:top-[20vh]  lg:w-[100px] '
    />
 <img src={About_Bee1}  alt="Image Of A Bee"
    className='absolute right-[160px] top-[150vh] w-[100px] max-sm:hidden '
    />

{/*Text Container*/}
    <div
    className=' w-[100%] h-auto mt-[100px]  text-[#5C4033] relative text-left p-[20px] lg:w-[700px]  lg:ml-[100px] lg:p-0 '>
    <h2 className='text-center mb-[50px] font-bold'>Our Mission</h2>
    <p className=' leading-10 lg:leading-8 '>
    At  Honey <span className='text-[#FF9F00]'>Bliss</span>, our mission is to bring the natural sweetness and health benefits of pure, unadulterated honey to your table. We are  <span className='text-[#FF9F00]'>passionate</span> about beekeeping and dedicated to sustainability, ensuring that our practices not only produce the finest honey but also protect and nurture our vital <span className='text-[#FF9F00]'>bee</span> populations. We believe that quality starts with the bees. Our honey is harvested from carefully managed hives located in pristine, <span className='text-[#FF9F00]'>pesticide-free</span> environments. Each jar of <span className='text-[#FF9F00]'>honey</span>is a testament to the hard work of our bees and the meticulous care of our beekeepers. We use traditional methods to extract and bottle our honey, preserving its natural enzymes, antioxidants, and unique <span className='text-[#FF9F00]'>flavor</span> profiles.</p>
    </div>

    {/*BeeKeeper Imags*/}
 <div className='flex gap-[10px] mt-[100px]  items-center flex-col lg:flex-row lg:justify-evenly'>
 <img src={About_Image1} alt="Image of a BeeKeeper" className="rounded-[20px] w-[95%] lg:w-[500px] h-[300px] object-cover ml-[10px] max-lg:m-0 max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer"/>
 <img src={About_Image2}  alt="Image of a BeeKeeper" className="rounded-[20px] w-[95%] lg:w-[500px] h-[300px] object-cover max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer"/>
 </div>
 </div>

{/*Team*/}
 <div className='w-full h-auto bg-[#f4e8c6] mt-[100px] overflow-hidden text-[#5C4033]'>

  <h2 className='text-center text-[3rem] font-semibold mt-[50px] max-lg:p-[10px]'>Our Team Of Experts</h2>
  <div className='flex  mt-[100px] justify-evenly max-lg:flex-col '>

{/*Member 1 */}
   <div>
   <img src={Member1} className="rounded-[20px] w-[500px] h-[300px] object-cover max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer max-lg:m-auto"/>
   <p className='text-center text-[#FF9F00] mt-[10px] mb-[10px]'>Beekeeper</p>
   <p className='font-bold text-center text-[1.2rem]'>Alexander Thompson</p>
   <p className='text-center  p-[30px]'>Lorem ipsum dolor sit amet <span className='font-bold'>consectetur</span> adipisicing elit. Ab culpa, voluptas voluptates id sed maiores velit eveniet minima consectetur hic quae inventore quidem esse tenetur soluta ratione eum dolorem  <span className='font-bold'>itaque.</span></p>
   </div>

   {/* Member 2*/}
   <div>
   <img src={Member2} className="rounded-[20px] w-[500px] h-[300px] object-cover max-lg:p-[20px] transition duration-500 hover:scale-105 cursor-pointer max-lg:m-auto"/>
   <p className='text-center text-[#FF9F00] mt-[10px] mb-[10px]'>Field Technician</p>
   <p className='font-bold text-center  text-[1.2rem]'>Benjamin Harris</p>
   <p className='text-center  p-[30px]'><span className='font-bold'>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Ab culpa, voluptas voluptates id sed <span className='font-bold'>maiores</span> velit eveniet minima consectetur hic quae inventore quidem esse tenetur soluta ratione <span className='font-bold'>eum</span> dolorem itaque.</p>
   </div>

   {/*Member 3*/}
   <div>
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