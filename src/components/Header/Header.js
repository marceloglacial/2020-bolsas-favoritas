import React from 'react';
import './Header.scss';

const Header = props => {
  return (
    <header className='page-header'>
      <div className='page-header__container container'>
        <div className='page-header__info flex-center'>
          <div className='page-header__howto flex-center'>
            <i className='fas fa-info' />
            Como Funciona
          </div>
          <div className='page-header__contact flex-center'>
            <i className='fab fa-whatsapp' />
            <div className='page-header__number'>
              <p className='page-header__tel'>0800 123 2222</p>
              <p className='page-header__send'>Envie mensagem ou ligue</p>
            </div>
          </div>
        </div>
        <div className='page-header__logo flex-center'>
          <h1 className='page-header__title'>Quero Bolsa</h1>
        </div>
        <div className='page-header__user-info flex-center'>
          <div className='page-header__user-name'>Nome Sobrenome</div>
          <div className='page-header__user-logo'>
            <i class='far fa-user-circle'></i>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
