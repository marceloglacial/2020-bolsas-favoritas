import React from 'react';
import './Card.scss';

const CardAdd = (props) => {
  const addCourse = (e) => {
    e.preventDefault();
    props.openCart();
  };

  return (
    <a
      href='/'
      className=' card card--add card--add__link'
      onClick={(e) => addCourse(e)}
    >
      <i className='fas fa-plus card--add__icon'></i>
      <h3 className='card--add__title'>Adicionar curso</h3>
      <p className='card--add__description'>
        Clique para adicionar bolsas de cursos do seu interesse
      </p>
    </a>
  );
};
export default CardAdd;
