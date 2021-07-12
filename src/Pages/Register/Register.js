import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../Register/Register.css';

function Register() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setlastName] = useState('')

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
    <div className="body"> 
    <div id="main-container">
      <h1>Cadastre-se para acessar o sistema</h1>
      <form id="register-form" action="">
        <div class="full-box">
          <label className="describes" for="email">E-mail</label>
          <input clasName="inputs" onChange={ handleChangeEmail } type="email" name="email" id="email" placeholder="seuemail@seuemail.com" data-min-length="2" data-email-validate />
        </div>
        <div class="half-box spacing">
            <label className="describes" for="name">Nome</label>
            <input clasName="inputs" onChange={ handleChangeName } type="text" name="name" id="name" placeholder="Seu nome" data-required data-min-length="3" data-max-length="16"/>
        </div>
        <div class="half-box">
            <label className="describes" for="lastname">Sobrenome</label>
            <input clasName="inputs" onChange={ handleChangeLastName } type="text" name="lastname" id="lastname" placeholder="Seu sobrenome" data-required data-only-letters />
        </div>
        <div class="half-box spacing">
          <label className="describes" for="lastname">Senha</label>
          <input type="password" name="password" id="password" placeholder="Sua senha" data-password-validate data-required />
        </div>
        <div class="half-box">
          <label className="describes" for="passconfirmation">Confirmação de senha</label>
          <input clasName="inputs" type="password" name="passconfirmation" id="passwordconfirmation" placeholder="Digite novamente" data-equal="password" />
        </div>
        <div>
          <input type="checkbox" name="agreement" id="agreement" />
          <label for="agreement" id="agreement-label">Eu li e aceito os
            <Link to=""> termos de uso</Link>
          </label>
        </div>
        <div class="full-box">
          <button id="btn-submit" type="button" onClick={ handleClick }>Registrar</button>
        </div>
      </form>
  </div>
  </div>
  );
}

export default Register;
