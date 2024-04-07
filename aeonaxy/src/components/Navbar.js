import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    
    <>
    <div className='w-full bg-white  fixed top-0 z-40    p-2   h-20 flex justify-between'>
    <div className=' flex  px-4  py-5 gap-10 max-[650px]:gap-[2vmax] max-[800px]:px-2   overflow-hidden'>
    <img alt='' className='rounded-full relative top-[-30%] max-[800px]:h-[4vmax] max-[800px]:w-[4vmax]  w-[2.7vmax] h-[2.7vmax]' src='https://logo.com/image-cdn/images/kts928pd/production/2948ad91525f9c01b82d467130b2e34c25026111-500x375.webp?w=640&q=72'/>
      <Link className='hover:text-blue-400 '>Personal</Link>
      <Link className='hover:text-blue-400 '>Buisness</Link>
      <Link className='hover:text-blue-400 '>Developer</Link>
      <Link className='hover:text-blue-400 '>Help</Link>
    </div>
    <div className="hidden max-[800px]:block ">
        <CiMenuBurger className="w-4 h-10" onClick={toggleMenu} />
      </div>
      <div className={`bg-white p-4 flex flex-nowrap gap-2 md:hidden lg:hidden border border-gray-300 shadow-md ${menuOpen ? 'md:absolute right-0' : 'hidden md:block'}`}>
        <button className="block px-2 py-1 rounded-full  border-2 border-blue-400" onClick={toggleMenu}>Login</button>
        <button className="block px-2 py-1 w-[20vmax]   rounded-full border-2 border-blue-400" onClick={toggleMenu}>Sign Up</button>
      </div>
    <div className='flex gap-4 p-2 flex-wrap max-[800px]:hidden'>
    <button className=' px-4 py-2 text-blue-600 hover:bg-gray-400 border-blue-400 border-2 rounded-full'>Log In</button>
    <button className='px-4 py-2  text-blue-600 hover:bg-gray-400 border-blue-400 border-2 rounded-full'>Sign Up</button>
    </div>
    </div>
    </>
  )
}

export default Navbar