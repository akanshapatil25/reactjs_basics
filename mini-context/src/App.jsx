import React, { useState } from 'react';
import './App.css';
import Usercontextprovider from './context/Usercontextprovider'; // ✅ corrected
import Login from './components/login';
import Profile from './components/profile';

function App() {
  return (
    <Usercontextprovider>
      <h1>Hello world!</h1>
      <Login />
      <Profile />
    </Usercontextprovider>
  );
}

export default App;
