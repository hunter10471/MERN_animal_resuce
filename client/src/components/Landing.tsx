import React from 'react';
import Icons from './Icons';
import Navbar from './Navbar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import dogImg from '../assets/images/dog.png';
import Avatar from './Avatar';
import Button from './Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Landing = () => {
  return (
    <div className='flex w-full h-full justify-center text-secondary flex-wrap md:flex-nowrap'>
      <div className='flex flex-col items-center justify-between overflow-y-hidden w-full h-screen relative lg:w-7/12 xl:w-9/12 bg-primary bg-landingImg bg-center '>
        <Navbar />
        <Icons classes='text-white flex-col absolute bottom-4 right-4' />
        <img className='object-scale-down min-w-fit h-[40vh] sm:h-[50vh] lg:h-[60vh] xl:h-[70vh]' src={dogImg} alt='' />
      </div>
      <div className='w- relative lg:w-5/12 xl:3/12 flex flex-col items-center min-h-[600px] md:min-h-full p-5 md:p-10'>
        <div className='flex w-full justify-end [&>*:hover]:opacity-60 [&>*]:cursor-pointer transition-all self-start gap-4 text-xl sm:text-2xl lg:text-3xl'>
          <PersonOutlineIcon fontSize='inherit' />
          <FavoriteBorderIcon fontSize='inherit' />
        </div>
        <div className='flex flex-col h-full justify-center'>
          <div className='flex gap-2 w-full my-4 md:my-8'>
            <Avatar url={dogImg} />
            <div className='flex flex-col justify-center'>
              <span className='font-bold font-heading text-base md:text-lg'>
                Max
              </span>
              <span className='text-stone-500 text-xs md:text-sm font-medium'>
                4 Years Old
              </span>
            </div>
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-thin font-heading my-4'>
            My name is Max and I love playing with socks.
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl w-[70%] self-start font-extrabold my-6 font-heading'>
            I&apos;m looking for a nice cozy place to call home.
          </h2>
          <Button classes='max-w-[200px]' theme='filled' text='Adopt Me' />
          <button className='absolute text-sm sm:text-base lg:text-xl right-10 bg-white text-primary border-2 border-primary hover:scale-105 hover:shadow-lg transition-all rounded-[50%] p-1 sm:p-2'>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
