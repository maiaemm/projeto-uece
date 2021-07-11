import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/context';

function NewProduct() {

  const { setName, setReference, setSize, setInStock, setValue } = useContext(Context)

  const handleChangeName = ({ target: { value }} ) => setName(value);
  const handleChangeReference = ({ target: { value }} ) => setReference(value);
  const handleChangeSize = ({ target: { value }} ) => setSize(value);
  const handleChangeinStock = ({ target: { value }} ) => setInStock(value);
  const handleChangeValue = ({ target: { value }} ) => setValue(value);

  const handleClick = () => {
  }

  return (
  <div id="main-container">
    <h1>Cadastrar um novo produto</h1>
    <form id="register-form">
      <div>
        <label htmlFor="nameP">Nome do produto
          <input onChange={ handleChangeName } type="text" id="nameP" name="Name" placeholder="Nome do produto" />
        </label>
      </div>
      <div>
        <label htmlFor="ref">Referência
          <input onChange={ handleChangeReference } type="text" id="ref" placeholder="Código de referência" />
        </label>
      </div>
      <div>
        <label htmlFor="size">Tamanhos
          <input onChange={ handleChangeSize } type="text" id="size" placeholder="P/M/G/GG" />
        </label>
      </div>
      <div>
        <label htmlFor="inStock">Quantidade
          <input onChange={ handleChangeinStock } type="number" id="inStock" placeholder="Quantidade" />
        </label>
      </div>
      <div>
          <label htmlFor="value">Valor</label>
          <input onChange={ handleChangeValue }  type="number" id="value" placeholder="Valor do produto" />
      </div>
        <Link to="/user">
          <button type="button" onClick={ handleClick }>Cadastrar</button>
        </Link>
    </form>
  </div>
  )
}

export default NewProduct;