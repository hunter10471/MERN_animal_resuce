import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '../components/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../components/Logo';
import Icons from '../components/Icons';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useMutation } from '@apollo/client';
import { GOOGLE_CONTINUE, LOGIN_USER } from '../mutations/userMutations';
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls';
import jwtDecode from 'jwt-decode';
import { motion } from 'framer-motion';

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [googleId, setGoogleId] = useState('');
  const [error, setError] = useState(null);
  const render = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser] = useMutation(LOGIN_USER, {
    variables: {
      email,
      password,
    },
  });
  const [loginUserGoogle] = useMutation(GOOGLE_CONTINUE, {
    variables: {
      email,
      password,
      username,
      googleId,
      avatar,
    },
  });

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser();
      if (res.errors) throw new Error('Login error.');
      await login(dispatch, res.data.loginUser);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 10000);
      console.log(error);
    }
  };

  const handleCallback = async(response) => {
    try {
      const user = jwtDecode(response.credential);
      setEmail(user.email);
      setGoogleId(`google_${user.email}`);
      setPassword(user.email);
      setAvatar(user.picture);
      setUsername(user.name);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  useEffect(()=>{
    const googleLogin = async() =>{
      const res = await loginUserGoogle();
      if (res.errors) throw new Error('Login error.');
      await login(dispatch, res.data.loginUserGoogle);
      navigate('/',{replace:true});
    };
    if(render) googleLogin();
    else render.current.value = true;
  },[googleId]);

  useEffect(() => {
    /* global google */
    window.onload = async() => {
      google.accounts.id.initialize({
        client_id:
          '784202356875-failmrkq5sj00coh02vfcdl5ai1lqta2.apps.googleusercontent.com', //eslint-disable-line
        callback: handleCallback,
      });
      google.accounts.id.renderButton(document.getElementById('button'), {
        theme: 'filled_black',
        size: 'large',
        shape: 'rectangular',
        text: 'continue_with',
        width: 280,
      });
      google.accounts.id.prompt();
    };
  }, []);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.2,ease:'linear'}} exit={{opacity:0}} className='flex flex-row-reverse w-full h-full justify-center text-secondary flex-wrap md:flex-nowrap'>
      <div className='w-full lg:w-7/12 xl:w-9/12 bg-loginImg bg-cover bg-center'>
        <div className='flex flex-col justify-center relative w-full h-screen bg-primary/70'>
          <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-extrabold font-heading text-white mx-4 px-2 md:mx-6 my-2 max-w-[700px] '>
            Let&apos;s save more lives together
          </h1>
          <h2 className='mx-4 px-2 md:mx-6 text-white font-light md:font-normal max-w-[500px] text-base lg:text-lg'>
            It&apos;s good to see you again! Thank you for being a part of
            adding meaning to precious lives around us and giving them another
            chance.
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
            Welcome Back
          </h1>
          <h2 className='text-xs md:text-sm text-stone-500 font-medium mt-1 mb-10 '>
            Enter your credentials and login
          </h2>
          {error && (
            <span className='p-2 sm:px-4 sm:py-3  mb-5 rounded bg-rose-200 text-rose-500 lg:text-base md:text-sm text-xs'>
              {error}
            </span>
          )}
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
          <span className='text-stone-500 md:text-sm text-xs mt-1 mb-6 w-full'>
            <b className='text-blue-500 cursor-pointer hover:underline'>
              Forgot your password?
            </b>
          </span>
          <Button text='Log In' theme='filled' />
          <Button
            id='button'
            classes='text-secondary mt-4 border-none w-fit'
            theme='outlined'
          />
          <span className='transition-all md:text-sm text-xs text-stone-500 font-medium pt-4 mt-4 w-full text-center border-t-2 cursor-pointer hover:text-stone-400'>
            <Link to='/register'> Don&apos;t have an account ? </Link>
          </span>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
