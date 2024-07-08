import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
    <div
    id="contact"
    className='relative'>
    <div className='w-[90%] h-[100px] m-auto bg-bg-contact mt-[200px] mb-[100px] bg-fixed  bg-cover overflow-hidden  relative z-[10]  text-[#5C4033] lg:w-[90%] lg:m-auto lg:mt-[100px] lg:h-[150px] rounded-[20px]'>
    <FaPhoneVolume size={50} className='absolute top-[20px] hidden lg:top-[60px] lg:left-[400px] lg:block'/>
 <h2 className='drop-shadow-lg text-center font-semibold mt-[10px] text-[1.5rem] lg:mt-[30px] lg:text-[2.5rem] ' >Let's get in touch </h2>
 <p className='text-center text-[1.4rem] font-semibold  lg:text-[2rem]'>honey_bliss@mail.com</p>
     </div>
        </div>

     </>
  )
}

export default Contact