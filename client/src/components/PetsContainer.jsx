import React from 'react';
import SinglePet from './SinglePet';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../queries/pet';


const PetsContainer = () => {
  const { loading, error, data } = useQuery(GET_PETS);
  console.log(data);
  return (
    <div className='flex flex-wrap justify-center gap-2 mt-20'>
      { !loading && !error && data.getPets.map((el, index) => {
        console.log(el);
        return <SinglePet key={index} id={el.id} picture={el.pictures[0].url} age={el.age} name={el.name} breed={el.breed} gender={el.gender} />;
      })}
    </div>
  );
};

export default PetsContainer;
