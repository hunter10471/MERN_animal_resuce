import React from 'react';
import Events from '../components/Events';
import Landing from '../components/Landing';
import Pets from '../components/Pets';
import PetsContainer from '../components/PetsContainer';


const Home = () => {
  return (
    <>
      <Landing/>
      <Events/>
      <Pets/>
    </>
  );
};

export default Home;