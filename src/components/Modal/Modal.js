import React from 'react';
import './Modal.scss';

const Modal = props => {
  return (
    <dialog className='modal__container flex-center' open>
      <section className='modal__card'>
        <h1>Modal</h1>
      </section>
    </dialog>
  );
};
export default Modal;
