import React from 'react';
import './Header.scss';

const Header = props => {
  return (
    <header className='page-header'>
      <div className='page-header__container container'>
        <div className='page-header__info flex-center'>
          <div className='page-header__howto flex-center'>
            <i className='fas fa-info' />
            <span className='hidden-on-mobile'>Como Funciona</span>
            <span className='hidden-on-desktop'>Ajuda</span>
          </div>
          <div className='page-header__contact flex-center hidden-on-mobile'>
            <i className='fab fa-whatsapp' />
            <div className='page-header__number'>
              <p className='page-header__tel'>0800 123 2222</p>
              <p className='page-header__send'>Envie mensagem ou ligue</p>
            </div>
          </div>
        </div>
        <div className='page-header__logo flex-center'>
          <a href='/' className='page-header__title'>
            <h1>Quero Bolsa</h1>
          </a>
        </div>
        <div className='page-header__user-info flex-center'>
          <div className='page-header__user-name'>
            <span className='hidden-on-mobile'>Nome Sobrenome</span>
            <span className='hidden-on-desktop'>Conta</span>
          </div>
          <div className='page-header__user-logo'>
            <i className='far fa-user-circle'></i>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
