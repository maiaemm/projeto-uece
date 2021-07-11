import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (evt) => setEmail(evt.target.value)
  const handleChange2 = (evt) => setPassword(evt.target.value)

  const handleClick = () => console.log(email, password);

  function validateEmail(email, senha) {
    var re = /\S+@\S+\.\S+/;
    if(re.test(email) && senha.length > 6) {
      return false
    }
    return true
  }

  return (
    <div id="login-container">
      <h1>Login </h1>
      <img className="bobinho" src="https://darlildo.files.wordpress.com/2014/08/regular-show-about-the-show.png" alt="foto-bobinho" />
      <form action="">
        <label forFor="email">E-mail
          <input onChange={ handleChange } type="email" name="email" id="email" placeholder="Digite seu e-email" />
        </label>
        <label HtmlFor="password">Senha
          <input onChange={ handleChange2 } type="password" id="password" placeholder="Digite sua senha" />
        </label>
        <Link to="/forget" id="forgot-pass">Esqueceu a senha?</Link>
          <Link to="/user" id="user-link">
            <button disabled={ validateEmail(email, password) } onClick={ handleClick }>Login</button>
          </Link>
      </form>
    <div id="register-container">
      <Link to="/register">Ainda não tem uma conta?</Link>
    </div>
  </div>
  );
}

export default Login;
