import React from 'react';
import Icons from './Icons';
import Navbar from './Navbar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import dogImg from '../assets/images/dog.png';
import Avatar from './Avatar';
import Button from './Button';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/apiCalls';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import blob from '../assets/images/blob.svg';


const goToPets = () =>{
  document.getElementById('pets').scrollIntoView();
};

const Landing = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.currentUser);
  const handleLogout = () => {
    logout(dispatch);
  };
  return (
    <div className='flex w-full h-full justify-center text-secondary flex-wrap md:flex-nowrap'>
      <div className=' flex flex-col items-center justify-between  w-full h-full min-h-screen relative lg:w-7/12 xl:w-9/12 bg-primary bg-landingImg bg-center '>
        <Navbar />
        <span className='absolute top-6  right-[calc(50%_-_32px)]  md:right-[-100px]  rounded-[50%] bg-white/40'>
          <Logo />
        </span>
        <Icons classes='text-white flex-col absolute bottom-4 right-4 bg-black/20' />
        <motion.h1 data-testid='landing-heading' initial={{scale:0 ,opacity:0,rotate:15}} animate={{scale:1 ,opacity:1,rotate:[-5,5,-5,5,-5]}} transition={{duration:2.5,type:'spring',stiffness:200,delay:0.5 }}   className='font-central relative cursor-default  before:absolute before:w-full before:left-0 before:bg-gradient-to-l before:from-secondary before:h-[4px] before:rounded-xl before:bottom-[-12px] text-5xl sm:text-6xl lg:text-7xl whitespace-nowrap rotate-[-5deg]'>Welcome to Bayzuban!</motion.h1>
        <img
          className='object-scale-down min-w-fit h-[60vh] sm:h-[65vh] lg:h-[70vh]'
          src={dogImg}
          alt=''
        />
        <img
          className='absolute opacity-20 z-[-1] w-[40vw] right-0 md:left-0 top-[100%] md:top-[150%]'
          src={blob}
          alt='blob'
        />
      </div>
      <div className='w- relative lg:w-5/12 xl:3/12 flex flex-col items-center min-h-[600px] md:min-h-full p-5 md:p-10'>
        <img
          className='absolute opacity-20 z-[-1] w-[40vw] rotate-45 left-0 top-[80%]'
          src={blob}
          alt='blob'
        />
        <div className='flex w-full justify-end  transition-all self-start gap-4 text-2xl lg:text-3xl'>
          {user ? (
            <div className='flex items-center gap-5 [&>*:hover]:opacity-60 [&>*]:cursor-pointer'>
              {' '}
              <Link to={`/user/${user._id}`} ><PersonOutlineIcon fontSize='inherit' /></Link>
              <Button
                onClick={handleLogout}
                classes='w-fit'
                text='logout'
                theme='outlined'
              />
            </div>
          ) : (
            <div className='flex items-center gap-5 [&>*:hover]:opacity-60 [&>*]:cursor-pointer'>
              <Link to='/register'>
                {' '}
                <Button text='Register' theme='filled' />{' '}
              </Link>
              <Link to='/login'>
                <Button text='Login' theme='outlined' />{' '}
              </Link>
            </div>
          )}
        </div>
        <div className='flex flex-col h-full justify-center'>
          <div className='flex gap-2 w-full my-4 md:my-8'>
            <Avatar url={dogImg} />
            <div className='flex flex-col justify-center'>
              <span className='font-bold font-heading text-base md:text-lg'>
                Max
              </span>
              <span className='text-stone-500 text-xs md:text-sm font-medium'>
                4 Years Old
              </span>
            </div>
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl max-w-[90%] font-thin font-heading my-4'>
            My name is Max and I love playing with socks.
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl w-[70%] self-start font-extrabold my-6 font-heading'>
            I&apos;m looking for a nice cozy place to call home.
          </h2>
          <Button onClick={goToPets} classes='max-w-[200px]' theme='filled' text='Adopt Me' />
        </div>
      </div>
    </div>
  );
};

export default Landing;
