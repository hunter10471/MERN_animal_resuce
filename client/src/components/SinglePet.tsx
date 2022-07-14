import React from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
//import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// interface ISinglePetProps {
// }

const SinglePet = () => {
  return (
    <div className='flex flex-col group transition-all duration-300 ease-in-out overflow-hidden cursor-pointer hover:scale-105 justify-end relative w-[150px] h-[200px] sm:w-[200px] sm:h-[250px] lg:w-[250px] lg:h-[300px] m-4 hover:shadow-2xl  shadow-xl rounded-xl'>
      <FavoriteBorderIcon className='absolute top-4 right-4 transition-all duration-300 cursor-pointer  bg-white p-1 rounded-xl text-primary border-2 hover:scale-105 hover:text-white hover:bg-primary ' fontSize='large' />
      <img
        className='absolute rounded-xl w-full h-full object-cover object-center z-[-1]'
        src='https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80'
      />
      <div className='w-full transition-all duration-500 ease-in-out  group-hover:translate-y-[200px] group-hover:opacity-100 relative text-white font-medium p-2 md:p-3'>
        <div className='absolute w-full h-full bottom-0 backdrop-blur-sm backdrop-filter firefox:bg-white/50 bg-gradient-to-b from-white/30 to-black/50  z-[-1] left-0'></div>
        <div className='flex flex-col'>
          <h1 className='font-bold font-heading cursor-default text-lg sm:text-xl md:text-2xl lg:text-3xl'>Bootman</h1>
          <h2 className='font-normal cursor-default text-sm sm:text-base md:text-lg lg:text-xl'>Persian Cat</h2>
          <div className='flex font-normal justify-between cursor-default gap-2 mt-2 md:mt-4 text-xs sm:text-sm md:text-base lg:text-lg'>
            <span className='flex items-center gap-1'>
              <AccessTimeFilledIcon fontSize='inherit' /> 5 months
            </span>
            <span className='flex items-center gap-1'>
              <FemaleIcon fontSize='inherit' /> Female
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePet;
