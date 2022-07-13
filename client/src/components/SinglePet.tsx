import React from 'react';
import Avatar from './Avatar';

// interface ISinglePetProps {
// }

const SinglePet = () => {
  return (
    <div className='lg:p-6 p-4 shadow-lg rounded-xl m-4 max-w-screen-2xl border-[1px]'>
      <div className='flex'>
        <div className='flex gap-2 w-full my-4 md:my-8'>
          <Avatar classes='border-2' />
          <div className='flex flex-col justify-center'>
            <span className='font-bold font-heading text-base md:text-lg'>
              Max
            </span>
            <span className='text-stone-500 text-xs md:text-sm font-medium'>
              4 Years Old
            </span>
          </div>
        </div>
        <div>
          <span>
            Vaccinated
          </span>
          <span>
            Litter Trained
          </span>
        </div>
      </div>
    </div>
  );
};

export default SinglePet;
