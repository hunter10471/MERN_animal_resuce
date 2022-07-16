import React, { useState } from 'react';
import { navData } from '../data';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return <nav className='relative flex justify-center text-white w-full' >
    <button onClick={()=>setToggle(!toggle)} className={`absolute right-4 top-10 ${toggle ? 'text-black' : 'text-white'}  block lg:hidden z-[10]`}>
      {toggle ? <CloseIcon/> : <MenuIcon />}
    </button>
    <ul className={`flex flex-col items-center text-primary lg:text-white bg-white lg:bg-transparent lg:items-start  lg:flex-row justify-evenly gap-2 max-w-screen-xl transition-all duration-300 ease-in-out overflow-hidden ${toggle ? 'h-[300px] px-6 pt-10 opacity-100' : 'h-[0px] opacity-0'} lg:opacity-100 lg:h-auto w-full lg:p-8`}>
      {
        navData.map((el,index)=>{
          return <li key={index} className=' text-base whitespace-nowrap first:mt-6 lg:first:mt-0 last:mb-2 lg:last:mb-0 sm:text-lg lg:text-xl font-heading font-medium px-2 py-1 border-transparent border-2 rounded-2xl hover:border-primary lg:hover:border-white cursor-pointer transition-all' >{el}</li>;
        })
      }
    </ul>
  </nav>;
};

export default Navbar;
