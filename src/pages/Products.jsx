import React from 'react';
import bee from "../assets/bee_products.png";
import honey from "../assets/honey_products.png";
import hive from "../assets/hive_products.png";
import Clover from "../assets/Clover.png";
import Manuka from "../assets/Manuka.png";
import Acacia from "../assets/Acacia.png";
import Buckwheat from "../assets/Buckwheat.png";
import bee2 from "../assets/bee_type2.png";
import Honey_Drop2 from "../assets/Honey_Drop2.png";
const Products = () => {
  return (
 <>
 <div
 className='w-full mt-[100px] items-center text-center flex justify-center gap-[50px] overflow-hidden text-[#5C4033] max-lg:flex-col relative max-lg:p-[50px]'
 id="products">
  <img src={Honey_Drop2} alt="Drop Of Honey"
   className='absolute right-0 top-[200px]'
  />
<div
className='flex flex-col w-[300px] text-center items-center relative'>
  
<div className='hex2  '>
  </div>
  <img src={hive} alt="Bee Hive"
  className='absolute top-[15px] left-[45px] w-[120px] '
  />
  <p className='mt-[30px] leading-8'>Our <span className='text-[#FF9F00]'>honey</span> is 100% pure and unprocessed, retaining all its natural enzymes, antioxidants, and nutrients for maximum <span className='text-[#FF9F00]'>health</span> benefits.
  </p>
</div>


<div 
className='flex flex-col w-[300px]  text-center items-center relative'>
<div className='hex2 '>
  </div>
  <img src={honey} alt="Honey Comb"
  className=' absolute top-[20px] left-[60px] w-[90px]'
  />
  <p className='mt-[30px] leading-8'>Sourced from pristine, <span className='text-[#FF9F00]'>pesticide-free</span> environments, our honey reflects the finest <span className='text-[#FF9F00]'>quality</span> and unparalleled taste nature has to offer.
  </p>
</div>


<div 
className='flex flex-col w-[300px]  text-center items-center  relative'>
<div className='hex2 mt-[25px]'>
  </div>
  <img src={bee} alt="Image Of A Bee"
  className='absolute top-[40px] left-[75px] w-[75px] '
  />
  <p className='mt-[25px] leading-8 '>Our sustainable and ethical <span className='text-[#FF9F00]'>beekeeping</span> practices ensure the well-being of our bees, resulting in honey that is not only delicious but also <span className='text-[#FF9F00]'>environmentally</span>  friendly.
  </p>
</div>
 </div>
 <h2 className='text-center mt-[100px] font-semibold text-[3rem] text-[#5C4033]'>Our Products</h2>
 <div 
 className='w-full h-auto mt-[100px] flex justify-evenly items-center  text-[#5C4033] relative max-lg:flex-col '>
  <img src={bee2}  alt="Image Of A Bee"
  className='absolute left-0 top-[-100px] max-sm:w-[100px] max-sm:left-[120px] w-[130px]'
  />

<div
className='flex flex-col text-center w-[200px] '>

  <img src={Clover} alt="Clover Honey Image"
   className='w-[300px] h-[300px] object-cover'
  />
<p className=' text-[1.3rem] font-semibold'>Clover Honey</p>
<p className='text-[1.3rem]'> $10 </p>
</div>

<div 
className='flex flex-col text-center w-[200px] '>
<img src={Manuka} alt="Manuka Honey Image"
   className='w-[300px] h-[300px] object-cover'
  />
<p className='text-[1.3rem] font-semibold'>Manuka Honey</p>
<p className='text-[1.3rem]'>$30</p>
</div>

<div 
className='flex flex-col text-center w-[200px] '>

<img src={Acacia} alt="Acacia Honey Image"
   className='w-[300px] h-[300px] object-cover'
  />

<p className='text-[1.3rem] font-semibold'>Acacia Honey</p>
<p className='text-[1.3rem]'>$15</p>
</div>

<div
className='flex flex-col text-center w-[200px] '>

<img src={Buckwheat} alt="Buckwheat Honey Image"
   className='w-[300px] h-[300px] object-cover'
  />

<p className='text-[1.3rem] font-semibold'>Buckwheat Honey</p>
<p className='text-[1.3rem]'>$13</p>
</div>
 </div>
 </>
  )
}

export default Products