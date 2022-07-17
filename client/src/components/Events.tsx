import React from 'react';
import EventAccordion from './EventAccordion';
import { events } from '../data';
import blob from '../assets/images/blob.svg';

const Events = () => {
  const majorEvent = events[0];
  return (
    <div className='relative flex-wrap  text-secondary my-10 md:my-16 p-5 flex items-center justify-center gap-10 sm:gap-20 lg:gap-32'>
      <div>
        <h1 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl max-w-[200px]'>
          Events & Fundraisers
        </h1>
        <h2 className='max-w-[400px] text-sm md:text-base font-medium text-stone-500 my-2'>
            Join us on our events and help the poor suffering lives by raising your voice with us!
        </h2>
        <img className='absolute opacity-20 z-[-1] w-[40vw] right-0 top-[-50%]' src={blob} alt='blob' />
        <img className='absolute opacity-20 z-[-1] w-[40vw] rotate-45 left-0 top-[50%]' src={blob} alt='blob' />
        <EventAccordion toggle={true} {...majorEvent} />
      </div>
      <div>
        {events.map((el, index) => {
          return index!==0 && <EventAccordion key={index} {...el} />;
        })}
      </div>
    </div>
  );
};

export default Events;
