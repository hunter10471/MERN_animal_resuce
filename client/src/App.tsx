import React from 'react';
import Home from './pages/Home';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SinglePet from './pages/SinglePet';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const user = useSelector((state: any) => state.currentUser);
  const location = useLocation();
  return (
    <ApolloProvider client={client}>
      <AnimatePresence exitBeforeEnter >
        <Routes location={location} key={location.key} >
          <Route path='/' element={<Home />} />
          <Route
            path='/login'
            element={user ? <Navigate to='/' replace /> : <Login />}
          />
          <Route
            path='/register'
            element={user ? <Navigate to='/' replace /> : <Register />}
          />
          <Route path='/pet/:id' element={<SinglePet />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
