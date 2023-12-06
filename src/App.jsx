import React, { useState, useEffect } from 'react';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import Home from './components/news/Home';

function App() {


  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
