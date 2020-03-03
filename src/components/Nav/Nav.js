import React from 'react';
import './Nav.scss';

const Nav = props => {
  return (
    <nav className='nav'>
      <ul className='nav__container container'>
        <li className='nav__item'>Minha conta</li>
        <li className='nav__item'>Pré-matrículas</li>
        <li className='nav__item'>Bolsas Favoritas</li>
      </ul>
    </nav>
  );
};
export default Nav;
