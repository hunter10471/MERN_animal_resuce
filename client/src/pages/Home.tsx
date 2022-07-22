import React from 'react';
import Events from '../components/Events';
import Hero from '../components/Hero';
import Landing from '../components/Landing';
import Pets from '../components/Pets';
import Subscribe from '../components/Subscribe';
import { motion, AnimatePresence } from 'framer-motion';


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'linear', when:'beforeChildren' }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence exitBeforeEnter >
        <Landing key={3} />
        <Events />
        <Pets key={5} />
        <Subscribe key={6} />
        <Hero key={7} />
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
