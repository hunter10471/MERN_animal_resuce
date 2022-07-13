import React from 'react';
import { navData } from '../data';

const Navbar = () => {
  return <nav className='flex justify-center text-white w-full' >
    <ul className='flex justify-evenly gap-2 max-w-screen-xl w-full p-6 lg:p-8'>
      {
        navData.map((el,index)=>{
          return <li key={index} className='text-base whitespace-nowrap sm:text-lg lg:text-xl font-heading font-medium px-2 py-1 border-transparent border-2 rounded-2xl hover:border-white cursor-pointer transition-all' >{el}</li>;
        })
      }
    </ul>
  </nav>;
};

export default Navbar;
