import React from 'react';
import cat from '../assets/images/cat.svg';
import dog from '../assets/images/dog.svg';
import animal from '../assets/images/animal.svg';
import PetsContainer from './PetsContainer';
import blob from '../assets/images/blob.svg';

const Pets = () => {
  return (
    <div className='relative text-secondary flex justify-center flex-col items-center my-10 md:my-16 p-5'>
      <h1 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl'>Available Pets</h1>
      <h2 className='text-sm md:text-base lg:text-lg font-medium text-stone-600 my-2 md:text-left text-center'>
        Begin your search for the perfect companion.
      </h2>
      <img className='absolute opacity-20 z-[-1] w-[40vw] right-0 top-[50%]' src={blob} alt='blob' />
      <img className='absolute opacity-20 z-[-1] w-[40vw] rotate-45 left-0 top-[100%]' src={blob} alt='blob' />
      <div className='flex flex-wrap justify-center gap-6 [&>*:hover]:opacity-80 [&>*]:cursor-pointer [&>*]:bg-white  [&>*]:transition-all my-6'>
        <div className='shadow-lg border-2 py-2 px-6 md:w-fit w-full max-w-[300px] justify-center gap-3 flex items-center rounded-xl'>
          <img className='w-[25px] md:w-[40px]' src={cat} alt='cat' />
          <h3 className='font-bold text-blue-500 md:text-base text-sm' >Search Cats</h3>
        </div>
        <div className='shadow-lg py-2 px-6 md:w-fit w-full max-w-[300px] justify-center border-2 gap-3 flex items-center rounded-xl '>
          <img className='w-[25px] md:w-[40px]' src={dog} alt='dog' />
          <h3 className='font-bold text-blue-500 md:text-base text-sm' >Search Dogs</h3>
        </div>
        <div className='shadow-lg py-2 px-6 md:w-fit w-full max-w-[300px] justify-center border-2 gap-3 flex items-center rounded-xl '>
          <img className='w-[25px] md:w-[40px]' src={animal} alt='animal' />
          <h3 className='font-bold text-blue-500 md:text-base text-sm' >Search Other Animals</h3>
        </div>
      </div>
      <PetsContainer/>
    </div>
  );
};

export default Pets;