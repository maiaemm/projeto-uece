import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (evt) => setEmail(evt.target.value)
  const handleChange2 = (evt) => setPassword(evt.target.value)

  const handleClick = () => console.log(email, password);

  return (
    <div className='box-container'>
    
    <div id="login-container">
      <h1>Login </h1>
      <img className="bobinho" src="https://darlildo.files.wordpress.com/2014/08/regular-show-about-the-show.png" alt="foto-bobinho" />
      <form action="">
        <label className='describes' for="email">E-mail</label>
        <input className='input-form' onChange={ handleChange } type="email" name="email" id="email" placeholder="Digite seu e-email" autocomplete="off" />
        <label  className='describes'for="password">Senha</label>
        <input className='input-form' onChange={ handleChange2 } type="password" name="password" id="password" placeholder="Digite sua senha" />
        <Link className='clicaveis' to="/forget" id="forgot-pass">Esqueceu a senha?</Link>
          <Link to="/user" id="user-link">
            <button className='bot' onClick={ handleClick }>Login</button>
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
