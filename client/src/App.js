import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Home from './pages/home';
import About from './pages/about';
import ContactInner from './pages/contact-inner';
import ContactForm from './pages/contact-form';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact-form' element={<ContactForm />} />
        <Route path='/contact/:id' element={<ContactInner />} />
      </Routes>
    </>
  );
};

export default App;
