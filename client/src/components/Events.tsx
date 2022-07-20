import React from 'react';
import EventAccordion from './EventAccordion';
import { events } from '../data';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: {
    opacity: 0,
    y: '50vh',
  },
  visible: {
    opacity: 1,
    y: '0vh',
    transition: {
      type: 'spring',
      stiffness:50,
      duration: 1,
      when: 'beforeChildren',
    },
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
    x: '-20vw',
  },
  visible: {
    opacity: 1,
    x: '0vw',
    transition: {
      type: 'spring',
      stiffness:50
    },
  },
};

const headingVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition:{
      delay:1,
      duration:1
    }
  },
};


const Events = () => {

  const majorEvent = events[0];
  return (
    <motion.div
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='relative flex-wrap  text-secondary sm:mt-[5vh] lg:mt-[20vh] p-5 flex items-center justify-center gap-10 sm:gap-20 lg:gap-32'
    >
      <div>
        <motion.div variants={headingVariant} viewport={{once:true}} >
          <h1 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl max-w-[200px]'>
            Events & Fundraisers
          </h1>
          <h2 className='max-w-[400px] text-sm md:text-base font-medium text-stone-500 my-2'>
            Join us on our events and help the poor suffering lives by raising
            your voice with us!
          </h2>
        </motion.div>
        <motion.div variants={childVariant}>
          <EventAccordion toggle={true} {...majorEvent} />
        </motion.div>
      </div>
      <div>
        {events.map((el, index) => {
          return index !== 0 && <EventAccordion key={index} {...el} />;
        })}
      </div>
    </motion.div>
  );
};

export default Events;
