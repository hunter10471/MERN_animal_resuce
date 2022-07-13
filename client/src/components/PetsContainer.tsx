import React from 'react';
import SinglePet from './SinglePet';

const PetsContainer = () => {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      <SinglePet />
      <SinglePet />
      <SinglePet />
      <SinglePet />
      <SinglePet />
      <SinglePet />
      <SinglePet />
      <SinglePet />
      <SinglePet />
      <SinglePet />
    </div>
  );
};

export default PetsContainer;
