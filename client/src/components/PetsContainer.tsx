import React from 'react';
import SinglePet from './SinglePet';
import { gql, useQuery } from '@apollo/client';

const GET_PETS = gql`
  query getPets {
    id
    name
  }
`;

const PetsContainer = () => {
  const { loading,error,data } = useQuery(GET_PETS);
  console.log(data);
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      <SinglePet />
    </div>
  );
};

export default PetsContainer;
