import React, { useState } from 'react';
import './style.css'

function Login() {
  const [email, setEmail] = useState('Milshake');
  const [senha, setSenha] = useState(0);

  const handleChange = (evt) => setEmail(evt.target.value)

  const handlePassword = (evt) => setSenha(evt.target.value)

  const handleClick = (evt) => window.alert('Clicado!')

  return (
    <div className="login-container">
      <h3>Olá! {email}</h3>
      <div>
        <img src="https://i.pinimg.com/originals/66/c0/f3/66c0f3951cf18634e632c383284ab1f7.png" alt="imagem do usuário" />
      </div>
      <label htmlFor='email-user'>Email: 
        <input type="text" id='email-user' onChange={ handleChange } />
      </label>
      <div>
      <label htmlFor="password-user">Senha:<p>Sua senha é: {senha}</p>
        <input type="password" id="password-user" onChange={ handlePassword }/>
      </label>
      </div>
      <p>
        Não tem conta ? Crie agora.
      </p>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
