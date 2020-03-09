import React from 'react';
import './Modal.scss';

const Modal = props => {
  const { isOpen, toggleModal } = props;
  return (
    <dialog className='modal' open={isOpen}>
      <section className='modal-container'>
        <div className='modal__close'>
          <button className='modal__close-button' onClick={toggleModal}>
            Close
          </button>
        </div>
        <section className='modal-header'>
          <h2 className='modal-header__title'>Adicionar bolsa</h2>
          <p className='modal-header__description'>
            Filtre e adicione as bolsas de seu interesse.
          </p>
        </section>
        <section className='modal-content'>{props.children}</section>
      </section>
    </dialog>
  );
};
export default Modal;
