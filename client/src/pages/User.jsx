import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import { motion } from 'framer-motion';

import avatarImg from '../assets/images/avatar.png';
import Button from '../components/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../mutations/userMutations';
import { Link } from 'react-router-dom';
import NewPet from '../components/NewPet';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import blob from '../assets/images/blob.svg';


const User = () => {
  const user = useSelector((state) => state.currentUser);
  const updatedUserInfo = {};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [avatar, setAvatar] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const [failureModal, setFailureModal] = useState(false);

  email !== '' && (updatedUserInfo.email = email);
  password !== '' && (updatedUserInfo.password = password);
  username !== '' && (updatedUserInfo.username = username);
  city !== '' && (updatedUserInfo.city = city);
  postalCode !== '' && (updatedUserInfo.postalCode = postalCode);
  address !== '' && (updatedUserInfo.address = address);
  avatar !== '' && (updatedUserInfo.avatar = avatar);

  const [updateUser] = useMutation(UPDATE_USER, {
    variables: {
      id: user._id,
      ...updatedUserInfo,
    },
    context: {
      headers: {
        id: user._id,
        auth: user.token,
      },
    },
  });

  const updateAvatar = async (e) => {
    let formData = new FormData();
    formData.append('file', e);
    formData.append('upload_preset', 'animal_rescue');
    await axios.post(
      'https://api.cloudinary.com/v1_1/dz79wze9e/image/upload',
      formData
    ).then((res)=>setAvatar(res.data.url));
  };

  const updateInfo = async (e) => {
    try {
      e.preventDefault();
      const res = await updateUser();
      if (res.errors) throw new Error('User cannot be updated at the moment.');
      setSuccessModal(true);
      setTimeout(() => setSuccessModal(false), 10000);
    } catch (error) {
      setFailureModal(true);
      setTimeout(() => setFailureModal(false), 10000);
      console.log(error);
    }
  };

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } }}
        exit={{ opacity: 0, transition: { duration: 0.12, ease: 'easeIn' } }}
        className='w-fit mx-auto p-6 my-20 '
      >
        <img
          className='absolute opacity-20 z-[-1] w-[50vw] left-[-10vw] top-0'
          src={blob}
          alt='blob'
        />
        <img
          className='absolute opacity-20 z-[-1] w-[50vw] right-[-10vw] bottom-[-100%]'
          src={blob}
          alt='blob'
        />
        <Link className='absolute left-8 top-16' to='/'>
          <span className='flex gap-1 items-center text-blue-500 hover:underline '>
            {' '}
            <KeyboardBackspaceIcon /> Back to home
          </span>
        </Link>
        <h1 className='text-lg sm:text-xl lg:text-2xl font-heading font-bold text-stone-700 capitalize'>
          Hello, {user.username}
        </h1>
        <h2 className='text-xs sm:text-sm lg:text-base text-stone-600'>
          Following are your account details
        </h2>
        <form
          onSubmit={updateInfo}
          className='my-5 w-full mx-auto flex items-center flex-col'
        >
          <div className='flex flex-col items-center my-4'>
            <label
              htmlFor='avatar'
              className='relative object-cover cursor-pointer'
            >
              <img
                src={user.avatar || avatarImg}
                className='w-[100px] h-[100px] object-cover rounded-[50%] border-2 border-primary'
                alt='avatar'
              />
              <AddCircleIcon
                fontSize='small'
                className='text-primary absolute bottom-1 right-0 bg-white rounded-[50%]'
              />
            </label>
            <input
              id='avatar'
              onChange={(e) => updateAvatar(e.target.files[0])}
              className='hidden'
              type='file'
              alt='avatar'
            />
          </div>
          <div className='flex lg:flex-row flex-col gap-10'>
            <div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Email
                </label>
                <input
                  autoComplete='false'
                  onChange={(e) => setEmail(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='email'
                  defaultValue={user.email}
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Username
                </label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='text'
                  defaultValue={user.username}
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Password
                </label>
                <input
                  minLength={8}
                  onChange={(e) => setPassword(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='password'
                  defaultValue='12345678'
                />
              </div>
            </div>
            <div className='self-start w-full'>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Address
                </label>
                <textarea
                  placeholder='Address'
                  onChange={(e) => setAddress(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='address'
                  defaultValue={user.address}
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  Postal Code
                </label>
                <input
                  placeholder='5246-NA'
                  onChange={(e) => setPostalCode(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='text'
                  defaultValue={user.postalCode}
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-sm md:text-base font-medium text-stone-600'>
                  City
                </label>
                <input
                  placeholder='City'
                  minLength={8}
                  onChange={(e) => setCity(e.target.value)}
                  className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                  type='text'
                  defaultValue={user.city}
                />
              </div>
            </div>
          </div>
          <Button
            onClick={updateInfo}
            text='Update'
            theme='filled'
            classes='mt-10'
          />
        </form>
        <Alert
          style={{ display: successModal ? 'flex' : 'none', marginTop: '14px' }}
          sx={{ backgroundColor: 'lightgreen', fontWeight: '500' }}
          severity='success'
        >
          Account updated successfully, please login to see changes.
        </Alert>
        <Alert
          style={{ display: failureModal ? 'flex' : 'none', marginTop: '14px' }}
          sx={{ backgroundColor: 'lightred', fontWeight: '500' }}
          severity='error'
        >
          There was an error with your request
        </Alert>
        {user.isAdmin && <NewPet />}
      </motion.main>
    </>
  );
};

export default User;
