import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/context';

function Home() {
  const { email, name, reference, size, inStock, value } = useContext(Context);

  useEffect(() => {
    const getEmail = localStorage.getItem('email');
    if(!getEmail) localStorage.setItem('email', email);
    const verify = localStorage.getItem('produtos');
    const transform = verify.length > 0
    ? JSON.parse(localStorage.getItem('produtos'))
    : localStorage.getItem('produtos');
    if(name !== '') {
      localStorage.setItem('produtos', JSON.stringify([...transform, {name, reference, size, inStock, value}]))
    } 
    
    // else {
    //   localStorage.setItem('produtos', JSON.stringify([...JSON.parse(localStorage.getItem('produtos')),name]))
    // }
  });

  return (
  <div id="main-container">
  <p>Olá { email }</p>
    <h1>Seu Estoque</h1>
      <p>Você não possui produtos cadastrados!</p>
      <Link to="/new-product">
        <button>Adicionar produto</button>
      </Link>
  </div>
  )
}

export default Home;