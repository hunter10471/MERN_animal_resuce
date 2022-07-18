import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const Help = () => {
  return (
    <div className='flex flex-col relative mx-4 lg:mx-0 xl:mx-4 my-20 max-w-screen-2xl'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl text-primary font-heading text-center font-bold tracking-widest mb-20'>
        HOW CAN WE HELP YOU?
      </h1>
      <div className='my-5 flex flex-wrap justify-center gap-12'>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <SearchIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>SEARCH</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
            Our vision is to rescue, rehabilitate and re-home animals in crisis,
            ensure healthy & good pets through education and advocacy.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <AppRegistrationIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>REGISTER</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
            Our vision is to rescue, rehabilitate and re-home animals in crisis,
            ensure healthy pets through education, advocacy and affordable.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <VolunteerActivismIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>ADOPT</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
            Our vision is to rescue, rehabilitate and rehome animals in crisis,
            ensure healthy pets through education, advocacy and affordable.
          </p>
        </div>
        <div className='flex flex-col items-center gap-6 max-w-[200px]'>
          <RequestQuoteIcon sx={{ fontSize: 80 }} className='text-primary' />
          <h2 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary '>DONATE</h2>
          <p className='text-justify text-stone-600 font-medium text-sm sm:text-base lg:text-lg'>
            Our vision is to rescue, rehabilitate and rehome animals in crisis,
            ensure healthy pets through education, advocacy and affordable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
