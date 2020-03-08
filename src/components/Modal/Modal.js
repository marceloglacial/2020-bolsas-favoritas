import React from 'react';
import './Modal.scss';

const Modal = props => {
  return (
    <dialog className='modal' open>
      <section className='modal-container'>
        <div className='modal-header'>
          <h2 className='modal-header__title'>Adicionar bolsa</h2>
          <p className='modal-header__description'>
            Filtre e adicione as bolsas de seu interesse.
          </p>
        </div>
        <div className='modal-filters'>
          <div className='modal-filter'>
            <label className='modal-filter__title' htmlFor='city'>
              Selecione sua cidade
            </label>
            <select className='modal-filter__options' id='city' name='city'>
              <option>São José dos Campos</option>
              <option>São José dos Campos</option>
            </select>
          </div>
          <div className='modal-filter'>
            <label className='modal-filter__title' htmlFor='course'>
              Selecione o curso de sua preferência
            </label>
            <select className='modal-filter__options' id='course' name='course'>
              <option>Arquitetura e Urbanismo</option>
              <option>São José dos Campos</option>
            </select>
          </div>
        </div>
      </section>
    </dialog>
  );
};
export default Modal;
