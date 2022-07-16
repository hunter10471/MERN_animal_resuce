import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '../components/Button';
import googleIcon from '../assets/images/googleIcon.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../components/Logo';
import Icons from '../components/Icons';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { REGISTER_USER } from '../mutations/userMutations';
import { useMutation } from '@apollo/client';
import { GraphQLError } from 'graphql';

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [registerUser] = useMutation(REGISTER_USER, {
    variables: {
      username,
      email,
      password,
    },
  });

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await registerUser();
      if (res.errors) throw new Error('Registration error.');
      setSuccess(true);
      setTimeout(() => navigate('/login'),3000);
    } catch (error: any) {
      setError(error.message);
      setTimeout(() => setError(null), 10000);
      console.log(error);
    }
  };

  return (
    <div className='flex w-full h-full justify-center text-secondary flex-wrap md:flex-nowrap'>
      <div className='w-full lg:w-7/12 xl:w-9/12 bg-registerImg bg-cover bg-center'>
        <div className='flex flex-col justify-center relative w-full h-screen bg-primary/70'>
          <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold font-heading text-white mx-4 md:mx-6 my-2 max-w-[700px] px-2 '>
            Raising Voice For The Voiceless
          </h1>
          <h2 className='mx-4 md:mx-6 px-2 text-white font-light md:font-normal max-w-[500px] text-base lg:text-lg'>
            Be a part of Pakistan’s first e-platform adding meaning to precious
            lives around us and giving them another chance.
          </h2>
          <Icons classes='text-white mt-4 px-2 mx-4 md:mx-6' />
          <span className='md:hidden block'>
            <KeyboardArrowDownIcon
              onClick={() => document.getElementById('form')?.scrollIntoView()}
              className='absolute text-white bottom-[110px] left-[calc(50%_-_22px)] animate-bounce hover:bg-black/20 p-1 rounded-[50%] cursor-pointer '
              fontSize='large'
            />
          </span>
        </div>
      </div>
      <div
        id='form'
        className='relative w-full lg:w-5/12 xl:3/12 flex items-center min-h-[600px] md:min-h-full justify-center'
      >
        <form
          onSubmit={Submit}
          className='flex flex-col items-center justify-center max-w-[350px] w-full m-2 px-8 py-8 rounded-xl bg-white absolute md:static top-[-100px] shadow-lg md:shadow-none '
        >
          <span className='text-xs md:text-sm flex items-center gap-2 absolute top-[105%] left-[32%] md:top-16 md:left-6 text-blue-400 hover:underline'>
            <KeyboardBackspaceIcon />
            <Link to='/'>Back to home </Link>
          </span>
          <Logo />
          <h1 className='font-heading font-bold text-xl md:text-2xl my-1'>
            Create An Account
          </h1>
          <h2 className='text-xs md:text-sm text-stone-500 font-medium mt-1 mb-10'>
            Enter your details and let&apos;s get started
          </h2>
          {error && (
            <span className='p-2 sm:px-4 sm:py-3  mb-5 rounded bg-rose-200 text-rose-500 lg:text-base md:text-sm text-xs'>
              {error}
            </span>
          )}
          {success && (
            <span className='p-2 sm:px-4 sm:py-3 mb-5 rounded bg-emerald-100  text-emerald-500 lg:text-base md:text-sm text-xs'>
              Account created successfully, you will be redirected to login.
            </span>
          )}
          <input
            onChange={(e) => setUsername(e.target.value)}
            required
            type='text'
            placeholder='Name'
            className='placeholder:italic border-b-2 transition-all duration-300 hover:border-blue-500 focus:border-blue-500 max-w-[350px] w-full pb-2 px-1 my-2 text-sm focus:outline-none  '
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            placeholder='Email'
            className='placeholder:italic border-b-2 transition-all duration-300 hover:border-blue-500 focus:border-blue-500 max-w-[350px] w-full pb-2 px-1 my-6 text-sm  focus:outline-none  '
          />
          <div className='max-w-[350px] my-2 w-full relative'>
            <span
              onClick={() => setVisible(!visible)}
              className='absolute right-2 bottom-4 text-stone-500 cursor-pointer'
            >
              {visible ? (
                <VisibilityOffIcon fontSize='small' />
              ) : (
                <VisibilityIcon fontSize='small' />
              )}
            </span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type={visible ? 'text' : 'password'}
              placeholder='Password'
              className='placeholder:italic border-b-2 transition-all duration-300 hover:border-blue-500 focus:border-blue-500 w-full pb-2 px-1 my-2 text-sm focus:outline-none  '
            />
          </div>
          <span className='text-stone-500 md:text-sm text-xs flex items-center gap-2 my-2 w-full'>
            <input
              className='mb-[2px] md:mb-1'
              type='checkbox'
              defaultChecked
            />
            Remember Me
          </span>
          <span className='text-stone-500 md:text-sm text-xs mt-1 mb-6 w-full'>
            By creating an account you agree to our{' '}
            <b className='text-blue-500 cursor-pointer hover:underline'>
              {' '}
              Terms & Conditions
            </b>
            .
          </span>
          <Button text='Create Account' theme='filled' />
          <Button
            onClick={(e) => e.preventDefault()}
            icon={
              <img
                className='w-[20px] md:w-[25px] md:h-[25px] h-[20px] object-scale-down rounded-[50%] mr-1'
                src={googleIcon}
                alt='Google-Icon'
                about='<a target="_blank" href="https://icons8.com/icon/V5cGWnc9R4xj/google">Google</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'
              />
            }
            classes='text-secondary mt-4'
            text='Sign Up With Google '
            theme='outlined'
          />
          <span className='transition-all md:text-sm text-xs text-stone-500 font-medium pt-4 mt-4 w-full text-center border-t-2 cursor-pointer hover:text-stone-400'>
            <Link to='/login'> Already have an account ? </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
