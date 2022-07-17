import React from 'react';
import SinglePet from './SinglePet';
import { useQuery } from '@apollo/client';
import { GET_PETS } from '../queries/pet';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: {
    opacity: 0,
    y: '20vh',
  },
  visible: {
    opacity: 1,
    y: '0vh',
    transition: {
      type: 'tween',
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    y: '20vh',
  },
  visible: {
    opacity: 1,
    y: '0vh',
    transition: {
      duration: 0.8,
      type: 'anticipate',
    },
  },
};

const PetsContainer = () => {
  const { loading, error, data } = useQuery(GET_PETS);

  return (
    <motion.div
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='flex flex-wrap justify-center gap-2 mt-20'
    >
      {!loading &&
        !error &&
        data.getPets.map((el, index) => {
          return (
            <SinglePet
              variants={childVariant}
              key={index}
              id={el.id}
              picture={el.pictures[0].url}
              age={el.age}
              name={el.name}
              breed={el.breed}
              gender={el.gender}
            />
          );
        })}
    </motion.div>
  );
};

export default PetsContainer;
