// context/Usercontextprovider.jsx
import React, { useState } from 'react';
import Usercontext from './Usercontext';

function Usercontextprovider({ children }) {
  const [user, setuser] = useState({});

  return (
    <Usercontext.Provider value={{ user, setuser }}>
      {children}
    </Usercontext.Provider>
  );
}

export default Usercontextprovider;
