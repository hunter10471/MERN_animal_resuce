import React from 'react';
import Button from './Button';
import Icons from './Icons';
import SendIcon from '@mui/icons-material/Send';

const Subscribe = () => {
  return (
    <div className='relative min-h-[300px] flex justify-center text-secondary my-10'>
      <div className='w-[90%] max-w-[700px] bg-white shadow-xl border-2  p-4 md:p-8 rounded-xl absolute bottom-[-50px] '>
        <h1 className='md:text-xl font-heading font-medium'>
          Subscribe to our newsletter & follow us on our social media to get the
          latest updates <SendIcon className='rotate-[-25deg] mb-2 text-primary' />
        </h1>
        <form className='flex gap-2 flex-col w-full mt-6'>
          <div className='flex gap-4'>
            <input
              type='text'
              required
              placeholder='First Name'
              className='bg-blue-50 py-2 px-4 w-full focus:outline-none md:text-base text-sm border-2 border-transparent focus:border-primary rounded-lg'
            />
            <input
              type='text'
              required
              placeholder='Last Name'
              className='bg-blue-50 py-2 px-4 w-full focus:outline-none md:text-base text-sm border-2 border-transparent focus:border-primary rounded-lg'
            />
          </div>
          <input
            type='email'
            required
            placeholder='Email Address'
            className='bg-blue-50 py-2 px-4 w-full focus:outline-none md:text-base text-sm border-2 border-transparent focus:border-primary rounded-lg'
          />
          <div className='flex items-center justify-between mt-6'>
            <Button text='Subscribe' theme='filled' classes='w-fit' />
            <Icons classes='text-primary' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
