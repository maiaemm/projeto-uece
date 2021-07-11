import React, { useState } from 'react';
import myContext from './context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [reference, setReference] = useState('');
  const [size, setSize] = useState('');
  const [inStock, setInStock] = useState('');
  const [value, setValue] = useState('');

  const context = {
    email,
    name,
    reference,
    size,
    inStock,
    value,
    setEmail,
    setName,
    setReference,
    setSize,
    setInStock,
    setValue,
  }


  return (
    <myContext.Provider value={ context }>
      {children}
    </myContext.Provider>
  )
}

export default Provider;