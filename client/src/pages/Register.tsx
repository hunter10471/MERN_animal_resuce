import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '../components/Button';
import googleIcon from '../assets/images/googleIcon.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


const Register = () => {
  const [visible, setVisible] = useState(false);
  return <div className='flex w-full h-full justify-center text-secondary flex-wrap md:flex-nowrap'>
    <div className='w-full lg:w-7/12 bg-registerImg bg-cover bg-center'>
      <div className='flex flex-col justify-center relative w-full h-screen bg-primary/50'>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold font-heading text-white mx-4 md:mx-6 my-2 max-w-[600px] ' >Raising Voice For The Voiceless</h1>
        <h2 className='mx-4 md:mx-6 my-2 text-white font-medium max-w-[450px] text-sm sm:text-base lg:text-lg'>Be a part of Pakistan’s first E-platform adding meaning to precious lives around us and giving them another chance.</h2>
        <div className='flex gap-2 sm:gap-3 lg:gap-5 text-lg sm:text-xl lg:text-2xl text-white absolute  bottom-[38%] left-4 md:bottom-2 [&>*:hover]:opacity-60 cursor-pointer'>
          <FacebookIcon fontSize='inherit' />
          <TwitterIcon fontSize='inherit' />
          <YouTubeIcon fontSize='inherit' />
          <InstagramIcon fontSize='inherit' />
        </div>
      </div>
    </div>
    <div className='relative w-full lg:w-5/12 flex items-center min-h-[600px] md:min-h-full justify-center' >
      <form className='flex flex-col items-center justify-center max-w-[350px] w-full m-2 px-8 py-8 rounded-xl bg-white absolute md:static top-[-100px] shadow-xl md:shadow-none '>
        <h1 className='font-heading font-bold text-xl md:text-2xl my-1 w-full text-left' >Create An Account</h1>
        <h2 className='text-xs md:text-sm text-stone-500 font-medium mt-1 mb-10 w-full text-left' >Enter your details and let&apos;s get started</h2>
        <input required type="text" placeholder='Name' className='placeholder:italic border-b-2 transition-all duration-300 hover:border-blue-500 focus:border-blue-500 max-w-[350px] w-full pb-2 px-1 my-2 md:text-sm text-xs focus:outline-none  ' />
        <input required type="email" placeholder='Email' className='placeholder:italic border-b-2 transition-all duration-300 hover:border-blue-500 focus:border-blue-500 max-w-[350px] w-full pb-2 px-1 my-8 md:text-sm text-xs focus:outline-none  ' />
        <div className='max-w-[350px] my-2 w-full relative'>
          <span onClick={()=>setVisible(!visible)} className='absolute right-2 bottom-4 text-stone-500 cursor-pointer'>{ visible ? <VisibilityOffIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}</span>
          <input required type={visible ? 'text' : 'password'} placeholder='Password' className='placeholder:italic border-b-2 transition-all duration-300 hover:border-blue-500 focus:border-blue-500 w-full pb-2 px-1 my-2 md:text-sm text-xs focus:outline-none  ' />
        </div>
        <span className='text-stone-500 md:text-sm text-xs flex items-center gap-2 my-2 w-full'>
          <input className='mb-1' type="checkbox" defaultChecked />
          Remember Me
        </span>
        <span className='text-stone-500 md:text-sm text-xs mt-1 mb-6 w-full'>
          By creating an account you agree to our <b className='text-blue-500 cursor-pointer hover:underline'> Terms & Conditions</b>.
        </span>
        <Button text='Create Account' theme='filled' />
        <Button icon={<img className='w-[25px] h-[25px] object-scale-down rounded-[50%] mr-1' src={googleIcon} alt='Google-Icon' about='<a target="_blank" href="https://icons8.com/icon/V5cGWnc9R4xj/google">Google</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>' />} classes='text-secondary' text='Sign Up With Google ' theme='outlined' />
        <span className='transition-all md:text-sm text-xs text-stone-500 font-medium mt-5 cursor-pointer hover:text-stone-400' >Already have an account ?</span>
      </form>
    </div>
  </div>;
};

export default Register;
