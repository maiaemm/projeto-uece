import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context/context';
import './newProduct.css';

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
  <div className="container">
  <div id="main-container">
    <h1>Cadastrar um novo produto</h1>
    <form>
        <label className='describes' htmlFor="nameP">Nome do produto
          <input className='input-form' onChange={ handleChangeName } type="text" id="nameP" name="Name" placeholder="Nome do produto" />
        </label>
        <label className='describes' htmlFor="ref">Referência
          <input className='input-form' onChange={ handleChangeReference } type="text" id="ref" placeholder="Código de referência" />
        </label>
        <label className='describes' htmlFor="size">Tamanhos
          <input className='input-form' onChange={ handleChangeSize } type="text" id="size" placeholder="P/M/G/GG" />
        </label>
        <label className='describes' htmlFor="inStock">Quantidade
          <input className='input-form' onChange={ handleChangeinStock } type="number" id="inStock" placeholder="Quantidade" />
        </label>
          <label className='describes' htmlFor="value">Valor</label>
          <input className='input-form' onChange={ handleChangeValue }  type="number" id="value" placeholder="Valor do produto" />
          <div className='button-container'>
        <Link to="/user">
          <button className="button-add-product" type="button" onClick={ handleClick }>Cadastrar</button>
        </Link>
        </div>
    </form>
  </div>
  </div>
  )
}

export default NewProduct;