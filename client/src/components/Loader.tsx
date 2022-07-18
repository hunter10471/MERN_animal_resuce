import { CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return <div className='flex items-center justify-center  w-full h-[50vh]' >
    <CircularProgress sx={{color:'#EF6F6F'}} />
  </div>;
};

export default Loader;
