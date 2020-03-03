import React from 'react';
import './Header.scss';

const Header = props => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__info'>
          <div className='header__howto'>Como Funciona</div>
          <div className='header__contact'>
            0800 123 2222 Envie mensagem ou ligue
          </div>
        </div>
        <div className='header__logo'>
          <h1 className='header__title'>Quero Bolsa</h1>
        </div>
        <div className='header__userinfo'>Nome Sobrenome</div>
      </div>
    </header>
  );
};
export default Header;
