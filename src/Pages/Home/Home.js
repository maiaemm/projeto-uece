import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/context';
import './Home.css'

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
  });

  const products = () => {
    const verify = localStorage.getItem('produtos');
    const products = verify.length > 0 
    ? JSON.parse(localStorage.getItem('produtos'))
    : localStorage.getItem('produtos');
    if(name !== '' && typeof products === 'string') {
      return (
        <>
        <p>Produto Cadastrado: </p>
          <p>Produto: {name}</p>
          <p>Produto: {reference}</p>
          <p>Produto: {size}</p>
          <p>Produto: {inStock}</p>
          <p>Produto: {value}</p>
        </>
      )
    }
    if(name !== '' && typeof products === 'object') {
      return (
        <>
          <p>Produtos cadastrados</p>
          {
            products.map((item) => {
              return (
                <>
                <p>Produto: {item.name}</p>
                <p>Produto: {item.reference}</p>
                <p>Produto: {item.size}</p>
                <p>Produto: {item.inStock}</p>
                <p>Produto: {item.value}</p>
                </>
              )
            })
          }
        </>
      )
    }
  }

  return (
  <div className="container">
    <div id="main-container">
    <p>Olá { localStorage.getItem('email') }</p>
      <h1>Seu Estoque</h1>
      {
        name !== '' 
        ? (products())
        :(<p>Você não possui produtos cadastrados!</p>) 
      }
        <Link to="/new-product">
          <button className="btn-add-product">Adicionar produto</button>
        </Link>
    </div>
  </div>
  )
}

export default Home;