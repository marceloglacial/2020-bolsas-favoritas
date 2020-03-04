import React from 'react';
import './Header.scss';

const Header = props => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__info flex-center'>
          <div className='header__howto flex-center'>
            <i className='fas fa-info' />
            Como Funciona
          </div>
          <div className='header__contact flex-center'>
            <i className='fab fa-whatsapp' />
            <div className='header__number'>
              <p className='header__tel'>0800 123 2222</p>
              <p className='header__send'>Envie mensagem ou ligue</p>
            </div>
          </div>
        </div>
        <div className='header__logo  flex-center'>
          <h1 className='header__title'>Quero Bolsa</h1>
        </div>
        <div className='header__userinfo  flex-center'>Nome Sobrenome</div>
      </div>
    </header>
  );
};
export default Header;
