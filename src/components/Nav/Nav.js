import React, { useState } from 'react';
import './Nav.scss';

const Nav = props => {
  const [modalIsOpen, setmodalIsOpen] = useState(true);
  const [openClass, setOpenClass] = useState('');

  const toggleClass = e => {
    e.preventDefault();
    modalIsOpen ? setOpenClass('is-open') : setOpenClass('');
    modalIsOpen ? setmodalIsOpen(false) : setmodalIsOpen(true);
  };

  return (
    <nav className='nav'>
      <div className='nav__container container'>
        <div className='nav__item nav__item--active'>
          <a href='/'>Minha conta</a>
        </div>
        <div className={`nav__submenu ${openClass}`}>
          <div className='nav__item'>
            <a href='/'>Pré-matrículas</a>
          </div>
          <div className='nav__item'>
            <a href='/'>Bolsas Favoritas</a>
          </div>
        </div>
        <div className='nav__item nav__item--menu hidden-on-desktop'>
          <a href='/' onClick={e => toggleClass(e)}>
            Menu <i className='fas fa-chevron-down'></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
