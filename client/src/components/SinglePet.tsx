import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from './Button';
// interface ISinglePetProps {
// }

const SinglePet = () => {
  return (
    <div className='flex flex-col group overflow-hidden justify-end relative w-[200px] h-[250px] sm:w-[250px] sm:h-[350px] lg:w-[300px] lg:h-[400px] m-4  shadow-xl rounded-xl'>
      <FavoriteBorderIcon className='absolute top-4 right-4 transition-all duration-300 cursor-pointer  bg-white p-1 rounded-xl text-primary border-2 hover:scale-105 hover:text-white hover:bg-primary ' fontSize='large' />
      <img
        className='absolute rounded-xl w-full h-full object-cover object-center z-[-1]'
        src='https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
      />
      <div className='w-full transition-all duration-500 ease-in-out translate-y-[200px] opacity-0 group-hover:translate-y-[0px] group-hover:opacity-100 relative text-white font-medium p-2 md:pt-4'>
        <div className='absolute w-full h-full bottom-0 backdrop-blur-sm backdrop-filter firefox:bg-white/50 bg-primary/60  z-[-1] left-0'></div>
        <div className='flex flex-col'>
          <h1 className='font-bold font-heading text-xl sm:text-2xl lg:text-3xl'>Bootman</h1>
          <h2 className='font-semibold text-lg sm:text-xl lg:text-2xl'>Cat</h2>
          <div className='flex justify-between gap-2 mt-2 md:mt-4 text-sm sm:text-base lg:text-lg'>
            <span className='flex items-center gap-1'>
              <AccessTimeFilledIcon fontSize='inherit' /> 5 months
            </span>
            <span className='flex items-center gap-1'>
              <FemaleIcon fontSize='inherit' /> Female
            </span>
          </div>
          <Button classes='mt-4 w-fit' theme='outlined' text='Check Me' />
        </div>
      </div>
    </div>
  );
};

export default SinglePet;
