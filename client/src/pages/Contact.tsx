import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Icons from '../components/Icons';
import Button from '../components/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import blob from '../assets/images/blob.svg';

const LeftContainer = () => {
  return (
    <div className='w-full md:w-4/12 min-w-[200px] min-h-[350px] text-white flex flex-col justify-between  bg-primary p-6 md:p-10 lg:p-14 xl:p-20'>
      <div>
        <h1 className='font-heading font-bold text-xl md:text-2xl lg:text-3xl'>
          Contact Us
        </h1>
        <h2 className='text-sm md:text-base font-medium'>
          Have a query? Leave a message.
        </h2>
      </div>
      <div className='flex flex-col gap-10 my-2 text-sm md:text-base'>
        <span className='flex items-center gap-3'>
          <LocalPhoneIcon /> +92 300 573879
        </span>
        <span className='flex items-center gap-3'>
          <EmailIcon /> bezubaan@gmail.com
        </span>
        <span className='flex items-center gap-3'>
          <LocationOnIcon /> F-19, Saddar, Karachi, Pakistan.
        </span>
      </div>
      <Icons />
    </div>
  );
};

const MiddleContainer = () => {
  return (
    <div className='flex-1 p-6 md:p-10 lg:p-14 xl:p-20'>
      <img
        className='absolute opacity-20 z-[-1] w-[50vw] right-[-10vw] bottom-[50%] lg:bottom-[0]'
        src={blob}
        alt='blob'
      />
      <form className='flex flex-col gap-14'>
        <div>
          <h1 className='font-heading font-bold text-xl md:text-2xl lg:text-3xl'>
            Leave us a message
          </h1>
          <h2 className='text-sm md:text-base font-medium'>
            We&apos;ll get back to you soon.
          </h2>
        </div>
        <input
          type='text'
          required
          placeholder='Full Name'
          className='border-b-2 w-full max-w-[400px] p-2 focus:outline-none hover:border-primary focus:border-primary'
        />
        <input
          type='email'
          required
          placeholder='Email'
          className='border-b-2 w-full max-w-[400px] p-2 focus:outline-none hover:border-primary focus:border-primary'
        />
        <input
          type='tel'
          required
          placeholder='Contact'
          className='border-b-2 w-full max-w-[400px] p-2 focus:outline-none hover:border-primary focus:border-primary'
        />
        <textarea
          required
          placeholder='Message'
          className='border-2 rounded-md w-full max-w-[400px] p-2 focus:outline-none hover:border-primary focus:border-primary'
        />
        <Button text='Submit' theme='filled' />
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'linear' }}
      exit={{ opacity: 0 }}
      className='flex flex-wrap mt-20 md:mt-0 justify-center items-center md:items-stretch flex-col-reverse w-full md:flex-row text-secondary min-h-screen'
    >
      <LeftContainer />
      <MiddleContainer />
      <div className=' items-center m-10 absolute right-2 top-2 md:flex  text-blue-500 cursor-pointer transition-all hover:underline '>
        <span className='text-xs sm:text-base md:text-lg font-medium mr-1'>
          <Link to='/'>Home</Link>
        </span>
        <ArrowForwardIcon />
      </div>
    </motion.div>
  );
};

export default Contact;
