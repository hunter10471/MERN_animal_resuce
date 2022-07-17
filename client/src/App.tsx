import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import SinglePet from './pages/SinglePet';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/pet/:id' element={<SinglePet />} />
      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
