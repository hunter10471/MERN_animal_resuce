import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_PET } from '../mutations/petMutations';
import { Alert } from '@mui/material';
import Button from './Button';
import { useSelector } from 'react-redux';
import axios from 'axios';


const NewPet = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [vaccinated, setVaccinated] = useState(false);
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [litterTrained, setLitterTrained] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failureModal, setFailureModal] = useState(false);
  const user = useSelector((state) => state.currentUser);
  const pictures = [];

  const [addPet] = useMutation(ADD_PET, {
    variables: {
      name,
      age,
      description,
      vaccinated,
      litterTrained,
      type,
      gender,
      breed,
      pictures,
    },
    context: {
      isAdmin: user.isAdmin,
      headers: {
        token: user.token,
      },
    },
  });

  const addImg = async (e) => {
    let formData = new FormData();
    formData.append('file', e);
    formData.append('upload_preset', 'animal_rescue');
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dz79wze9e/image/upload',
      formData
    );
    console.log(res);
    pictures.push({ url: res.data.url });
  };



  const addPetRequest = async (e) => {
    try {
      e.preventDefault();
      const res = await addPet();
      if (res.errors) throw new Error('Pet cannot be added at the moment.');
      setSuccessModal(true);
      setTimeout(() => setSuccessModal(false), 10000);
    } catch (error) {
      setFailureModal(true);
      setTimeout(() => setFailureModal(false), 10000);
      console.log(error);
    }
  };

  return (
    <div className='mt-20 pt-20 border-t-2'>
      <h1 className='text-lg sm:text-xl lg:text-2xl font-heading font-bold text-stone-700 capitalize'>
        Add A New Pet
      </h1>
      <h2 className='text-xs sm:text-sm lg:text-base text-stone-600'>
        Fill the form below to add a new pet
      </h2>
      <form
        onSubmit={addPetRequest}
        className='my-5 w-full mx-auto flex items-center flex-col'
      >
        <div className='flex lg:flex-row flex-col gap-10'>
          <div>
            <div className='flex flex-col my-2'>
              <label className='text-sm md:text-base font-medium text-stone-600'>
                Name
              </label>
              <input
                required
                placeholder='Name'
                autoComplete='false'
                onChange={(e) => setName(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                type='text'
              />
            </div>
            <div className='flex flex-col my-2'>
              <label className='text-sm md:text-base font-medium text-stone-600'>
                Type
              </label>
              <input
                required
                placeholder='cat/dog/tiger'
                onChange={(e) => setType(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                type='text'
              />
            </div>
            <div className='flex flex-col my-2'>
              <label className='text-sm md:text-base font-medium text-stone-600'>
                Gender
              </label>
              <input
                required
                placeholder='Gender'
                onChange={(e) => setGender(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                type='text'
              />
            </div>
            <div className='flex flex-col my-2'>
              <label className='text-sm md:text-base font-medium text-stone-600'>
                Age
              </label>
              <input
                required
                placeholder='18 years old'
                onChange={(e) => setAge(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                type='text'
              />
            </div>
          </div>
          <div className='self-start w-full'>
            <div className='flex flex-col my-2'>
              <label className='text-sm md:text-base font-medium text-stone-600'>
                Description
              </label>
              <textarea
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                type='address'
              />
            </div>
            <div className='flex flex-col my-2'>
              <label className='text-sm md:text-base font-medium text-stone-600'>
                Vaccinated
              </label>
              <div className='flex gap-8 my-4'>
                <div className='flex gap-2'>
                  <label>Yes</label>
                  <input
                    name='vaccine'
                    onClick={() => setVaccinated(true)}
                    required
                    type='radio'
                  />
                </div>
                <div className='flex gap-2'>
                  <label>No</label>
                  <input
                    name='vaccine'
                    onClick={() => setVaccinated(false)}
                    required
                    type='radio'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col my-2'>
              <label className='text-sm md:text-base font-medium text-stone-600'>
                Litter Trained
              </label>
              <div className='flex gap-8 my-4'>
                <div className='flex gap-2'>
                  <label>Yes</label>
                  <input
                    name='litter'
                    onClick={() => setLitterTrained(true)}
                    required
                    type='radio'
                  />
                </div>
                <div className='flex gap-2'>
                  <label>No</label>
                  <input
                    name='litter'
                    onClick={() => setLitterTrained(false)}
                    required
                    type='radio'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-col my-2'>
              <label className='text-sm md:text-base font-medium text-stone-600'>
                Breed
              </label>
              <input
                required
                placeholder='German'
                onChange={(e) => setBreed(e.target.value)}
                className='placeholder:italic hover:bg-slate-100 border-2 rounded-lg  hover:border-blue-400 my-2 transition-all duration-200 text-sm md:text-base  px-2 sm:px-4 min-w-[200px] py-2 focus:outline-none focus:border-blue-400 ring-2 ring-transparent'
                type='text'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full border-t-2 pt-2 mt-5'>
          <label className='text-sm md:text-base font-medium text-stone-600 my-5'>
            Pictures
          </label>
          <input
            required
            onChange={(e) => addImg(e.target.files[0])}
            type='file'
            className='my-2'
          />
          <input
            required
            onChange={(e) => addImg(e.target.files[0])}
            type='file'
            className='my-2'
          />
          <input
            required
            onChange={(e) => addImg(e.target.files[0])}
            type='file'
            className='my-2'
          />
        </div>
        <Button text='Add Pet' theme='filled' classes='mt-10' />
      </form>
      <Alert
        style={{ display: successModal ? 'flex' : 'none', marginTop: '14px' }}
        sx={{ backgroundColor: 'lightgreen', fontWeight: '500' }}
        severity='success'
      >
        Pet added successfully.
      </Alert>
      <Alert
        style={{ display: failureModal ? 'flex' : 'none', marginTop: '14px' }}
        sx={{ backgroundColor: 'lightred', fontWeight: '500' }}
        severity='error'
      >
        There was an error with your request
      </Alert>
    </div>
  );
};

export default NewPet;
