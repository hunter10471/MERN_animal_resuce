import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PetsIcon from '@mui/icons-material/Pets';
import InboxIcon from '@mui/icons-material/Inbox';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { useQuery } from '@apollo/client';
import { GET_PET } from '../queries/pet';

const SinglePet = () => {
  const [picture, setPicture] = useState(0);
  const id = useLocation().pathname.split('/')[2];
  const { loading, error, data } = useQuery(GET_PET, { variables: { id } });

  return (
    <div className='flex justify-center text-secondary'>
      <div className='p-3 sm:p-4 lg:p-6 max-w-screen-2xl w-full'>
        <div className='flex justify-center lg:justify-between items-center rounded-xl mb-10'>
          <Logo />
          <Navbar classes='lg:block hidden' dark={true} />
        </div>
        <Link to='/'>
          <span className='flex gap-1 items-center text-blue-500 hover:underline '>
            {' '}
            <KeyboardBackspaceIcon /> Back to home
          </span>
        </Link>
        <div className='flex md:flex-row flex-col my-14 gap-2 sm:gap-4 lg:gap-8'>
          {!loading && !error && (
            <>
              <div className='flex flex-col-reverse gap-2 items-center w-full md:w-6/12'>
                <div className='flex gap-2'>
                  {data.getPet.pictures.map((el, index) => {
                    return (
                      <img
                        onClick={() => setPicture(index)}
                        className='h-[80px] w-[80px] md:w-[120px] md:h-[120px] object-cover object-center my-4 rounded-xl cursor-pointer hover:opacity-80'
                        key={index}
                        src={el.url}
                        alt='pet'
                      />
                    );
                  })}
                </div>
                <img
                  className='rounded-xl w-[200px] h-[300px] sm:h-[450px] sm:w-[350px] lg:h-[600px] lg:w-[500px] object-cover object-center'
                  src={data.getPet.pictures[picture].url}
                  alt='pet'
                />
              </div>
              <div className='w-full md:w-6/12'>
                <h1 className='font-heading font-bold text-2xl sm:text-3xl lg:text-4xl'>
                  {data.getPet.name}
                </h1>
                <p className='max-w-[600px] text-xs sm:text-sm lg:text-base my-4 text-stone-600 tracking-wide '>
                  {data.getPet.description}
                </p>
                <div className='flex flex-col items-center md:w-fit'>
                  <h2 className='font-medium text-xs sm:text-sm lg:text-base my-4 sm:my-6 self-start'>
                    About {data.getPet.name}:
                  </h2>
                  <div className='flex items-center gap-4 p-4 border-[1px] border-primary rounded-xl my-2 md:my-4'>
                    <span className='p-1 sm:p-2 rounded-xl bg-primary/20 text-primary'>
                      <PetsIcon />
                    </span>
                    <span>
                      <h3 className='font-semibold text-sm sm:text-base lg:text-lg'>
                        Adoption
                      </h3>
                      <span className='text-stone-600 text-xs sm:text-sm lg:text-base'>
                        This pet is ready to be adopted anytime.
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-4 p-4 border-[1px] hover:border-primary rounded-xl my-2 md:my-4'>
                    <span className='p-1 sm:p-2 rounded-xl bg-primary/20 text-primary'>
                      <InboxIcon />
                    </span>
                    <span>
                      <h3 className='font-semibold text-sm sm:text-base lg:text-lg'>
                        Litter
                      </h3>
                      <span className='text-stone-600 text-xs sm:text-sm lg:text-base'>
                        The pet {data.getPet.litterTrained ? 'is' : 'is not'} litter-trained by animal experts.
                      </span>
                    </span>
                  </div>
                  <div className='flex items-center gap-4 p-4 border-[1px] hover:border-primary rounded-xl my-2 md:my-4'>
                    <span className='p-1 sm:p-2 rounded-xl bg-primary/20 text-primary'>
                      <VaccinesIcon />
                    </span>
                    <span>
                      <h3 className='font-semibold text-sm sm:text-base lg:text-lg'>
                        Vaccinated
                      </h3>
                      <span className='text-stone-600 text-xs sm:text-sm lg:text-base'>
                        {data.getPet.name} {data.getPet.vaccinated ? 'has' : 'doesn&apos;t has'} complete vaccinations done.
                      </span>
                    </span>
                  </div>
                  <Button classes='mt-6' text='Adopt Me' theme='filled' />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePet;
