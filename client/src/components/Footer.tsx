import React from 'react';


import {aboutUs, donorRescue, needHelp} from '../data';
import FooterSelect  from './FooterSelect';
import FooterList from './FooterList';


import Logo from './Logo';

const Footer = () => {
  return (
    <footer className=' sm:px-4 md:px-8 lg:px-12 xl:px-16 bg-secondary text-white'>
      <div className='flex justify-center'>
        <FooterList heading={'About us'} array={aboutUs} />
        <FooterList heading={'Become a donor'} array={donorRescue} />
        <FooterList heading={'Need our help?'} array={needHelp} />
      </div>
      <div className='flex flex-wrap items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 border-t-2 border-stone-600 w-full'>
        <h1 className='font-central mx-auto md:mx-10 text-white text-2xl sm:text-3xl md:text-4xl'>
          {' '}
          <Logo />
        </h1>
        <FooterSelect />
      </div>
      <p className='text-center text-[10px] md:text-xs p-2'>
        © 1996-2022 Bay-Zuban is a reserved site with it&apos;s rights vested in the
        respective owners and affaliates.
      </p>
    </footer>
  );
};

export default Footer;