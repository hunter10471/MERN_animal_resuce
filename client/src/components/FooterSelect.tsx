import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';

const FooterSelect = () => {
  return (
    <div className='flex m-4'>
      <section className='mx-2 text-sm md:text-base z-10 relative'>
        <LanguageIcon
          fontSize='inherit'
          className='absolute cursor-pointer right-1 bottom-2 md:bottom-[9px]'
        />
        <select
          className='appearance-none cursor-pointer hover:shadow-xl bg-white/10 focus:outline-none  text-white font-light border-white border-[1px] rounded-sm w-[120px] py-1 px-2 text-left'
          name='language'
          id=''
        >
          <option defaultChecked>Language</option>
          <option value='en'>English</option>
          <option value='en'>Francias</option>
          <option value='es'>Espanol</option>
        </select>
      </section>
      <section className='mx-2 z-10 text-sm md:text-base relative'>
        <SouthAmericaIcon
          fontSize='inherit'
          className='absolute cursor-pointer right-1 bottom-2 md:bottom-[9px] '
        />
        <select
          className='appearance-none cursor-pointer hover:shadow-xl bg-white/10 focus:outline-none  text-white font-light border-white border-[1px] rounded-sm w-[120px] py-1 px-2 text-left'
          name='language'
          id=''
        >
          <option defaultChecked>Region</option>
          <option value='us'>United States</option>
          <option value='as'>Asia</option>
          <option value='eu'>Europe</option>
          <option value='af'>Africa</option>
        </select>
      </section>
    </div>
  );
};

export default FooterSelect;
