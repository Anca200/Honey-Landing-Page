import React from 'react';
import { CgBee } from "react-icons/cg";

function Footer() {
  return (
    <footer className="bg-[#f4e8c6] rounded-lg shadow w-full  text-[#5C4033] mt-[50px] max-sm:mt-0">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <CgBee size={30} className='text-[#f9c356]'/>
                <span className="self-center text-[2rem] font-semibold whitespace-nowrap ">Honey <span className='text-[2rem] text-[#f9c356]'> Bliss</span></span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
                <li>
                    <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-amber-900 sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center ">© 2024 <a href="#home" className="hover:underline">Honey Bliss</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer