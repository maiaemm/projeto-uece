import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value)
  }

  const handleChangeName = ({ target: { value } }) => {
    setName(value)
  }

  const handleChangeLastName = ({ target: { value } }) => {
    setlastName(value)
  }

  const handleClick = () => console.log(email, name, lastName)

  return (
  <div className="container">
    <div id="main-container">
      <h1>Cadastre-se para acessar o sistema</h1>
      <form action="">
          <label for="email">E-mail
            <input className="input-form" onChange={ handleChangeEmail } type="email" name="email" id="email" placeholder="seuemail@seuemail.com" data-min-length="2" data-email-validate />
          </label>
            <label className='describes' for="name">Nome
              <input className="input-form"  onChange={ handleChangeName } type="text" name="name" id="name" placeholder="Seu nome" data-required data-min-length="3" data-max-length="16"/>
            </label>
            <label className='describes' for="lastname">Sobrenome
              <input className="input-form"  onChange={ handleChangeLastName } type="text" name="lastname" id="lastname" placeholder="Seu sobrenome" data-required data-only-letters />
            </label>
          <label className='describes' for="lastname">Senha
          <input className="input-form"  type="password" name="password" id="password" placeholder="Sua senha" data-password-validate data-required />
          </label>
          <label className='describes' for="passconfirmation">Confirmação de senha</label>
          <input className="input-form"  type="password" name="passconfirmation" id="passwordconfirmation" placeholder="Digite novamente" data-equal="password" />
        <div>
          <label for="agreement" id="agreement-label">
            <input type="checkbox" name="agreement" id="agreement" required='true' />
              Eu li e aceito os
            <Link to=""> termos de uso</Link>
          </label>
        </div>
        <div className="full-box">
          <Link to="/">
            <button id="btn-submit" type="button" onClick={ handleClick }>Registrar</button>
          </Link>
        </div>
      </form>
  </div>
</div>
  );
}

export default Register;
