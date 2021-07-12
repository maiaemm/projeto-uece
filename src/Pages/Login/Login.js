import React, { useState, useEffect, useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Context from '../../Context/context';

function Login() {
  const { email, setEmail } = useContext(Context)
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getProducts = localStorage.getItem('produtos');
    if(!getProducts)
    localStorage.setItem('produtos', []);
  })

  const handleChange = (evt) => setEmail(evt.target.value)
  const handleChange2 = (evt) => setPassword(evt.target.value)

  function validateEmail(email, senha) {
    var re = /\S+@\S+\.\S+/;
    if(re.test(email) && senha.length > 6) {
      return false
    }
    return true
  }

  return (
    <div className='box-container'>
    <span>a</span>
    <div id="login-container">
      <h1>Login </h1>
      <img className="bobinho" src="https://darlildo.files.wordpress.com/2014/08/regular-show-about-the-show.png" alt="foto-bobinho" />
      <form action="">
        <label className='describes' htmlFor="email">E-mail
          <input className='input-form' onChange={ handleChange } type="email" name="email" id="email" placeholder="Digite seu e-email" />
        </label>
        <label className='describes' htmlFor="password">Senha
          <input className='input-form' onChange={ handleChange2 } type="password" id="password" placeholder="Digite sua senha" />
        </label>
        <Link className='clicaveis' to="/forget" id="forgot-pass">Esqueceu a senha?</Link>
          <Link to="/user" id="user-link">
            <button className="btn-login" disabled={ validateEmail(email, password) }>Login</button>
          </Link>
      </form>
    <div id="register-container">
      <Link to="/register">Ainda não tem uma conta?</Link>
    </div>
  </div>
  </div>
  );
}

export default Login;
