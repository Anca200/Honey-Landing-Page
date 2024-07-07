import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { CgBee } from "react-icons/cg";

const Navbar = () => {

      {/* nav menu*/}
      const [nav,setNav] = useState(false);

      const handleNav = () => {
          setNav(!nav)
      }
      const toggleClick = () => {
        setNav(false)
      }
  return (
   <>
   <nav className=' flex justify-between p-[1rem] w-full h-auto text-center items-center text-[#5C4033] '>
    
    {/*Container Logo*/}
    <div className='flex  items-center gap-[5px] '>
    <CgBee size={20} className='text-[#FFC300]'/>
    <h2 className='font-bold text-[1.1rem]'>Honey <span className='text-[1.2rem] text-[#FFC300]'> Bliss</span></h2>
    </div>

    {/*Container Links*/}
    <div  className={
          nav
            ? '  fixed  left-0 top-0 w-full h-screen  text-[#5C4033] z-20 bg-[#FFF7E1] '
            : 'max-lg:hidden'}>
        <ul 
        onClick={toggleClick}
        className={ nav ? " flex flex-col gap-[50px] cursor-pointer text-[1.2rem] font-bold mt-[100px]" : 
            'flex gap-[20px] font-bold   max-lg:hidden'}>
                  <a href="#products">  <li className='hover:text-[#FFC30B] rounded-[20px]'>Products</li></a>
                  <a href="#about"><p className="hover:text-[#FFC30B] rounded-[20px]" >About</p></a>
                  <a href="#testimonials"><p className="hover:text-[#FFC30B] rounded-[20px]" >Testimonials</p></a>
                  <a href="#gallery"><p className="hover:text-[#FFC30B] rounded-[20px]" >Gallery</p></a>
                  <a href="#faq"><p className="hover:text-[#FFC30B] rounded-[20px]" >Faq</p></a>
            </ul>
<div>
</div>
</div>

<a href="#contact"> <button className='bg-[#FFC300] hover:bg-[#ffd559] rounded-[20px] p-[8px]  font-bold  '>Contact Us</button></a>
    
            {/*nav menu*/}
            <button onClick={handleNav} className=" hidden max-lg:block z-30   ">
        <FaBars className='text-[#FF9F00] ' size={30}/>
    </button>
   </nav>
   </>
  )
}

export default Navbar