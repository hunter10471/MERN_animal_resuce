import React from 'react';
import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SinglePet from './pages/SinglePet';
import { useSelector } from 'react-redux';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const user = useSelector((state:any) => state.currentUser);
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to='/' replace /> : <Login />} />
        <Route path='/register' element={user ? <Navigate to='/' replace /> : <Register />} />
        <Route path='/pet/:id' element={<SinglePet />} />
      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
