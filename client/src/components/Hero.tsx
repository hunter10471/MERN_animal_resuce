import React from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import Button from './Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex  justify-center items-center bg-heroImg bg-center min-h-[60vh]'>
      <div className='bg-blue-600/30 filter backdrop-blur-sm text-white flex flex-col justify-center items-center gap-4 p-6 w-full min-h-[60vh]'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold font-heading border-b-4 border-tertiary mb-2 mt-10'>
          Speaking up for animals,
        </h1>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold font-heading border-b-4 border-tertiary my-2'>
          Involving communities all around.
        </h1>
        <div className='flex items-center justify-center sm:flex-row flex-col gap-6 mt-10 max-w-[800px]'>
          <PetsIcon
            sx={{ fontSize: '70px' }}
            className='rotate-[-45deg] rounded-[50%] text-primary bg-white p-2 border-4 border-primary'
          />
          <h2 className='text-base sm:text-lg md:text-xl font-medium text-justify'>
            Bay-zuban has been working for almost a decade now and since day our
            ambition was to safeguard the interests of those who cannot speak
            for themselves. We at bay-zuban are proud of what we do and will
            continue to do so till god wills.
          </h2>
        </div>
        <Link className='min-w-[200px]' to='/contact'>
          <Button text='Contact Us' theme='filled' classes='mt-10' />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
