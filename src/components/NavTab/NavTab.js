import React from 'react';
import './NavTab.scss';
const NavTab = props => {
  const handleClick = (e, props) => {
    e.preventDefault();
    e.target.classList.toggle('is-selected');
  };

  return (
    <section className='navtab container'>
      <ul className='navtab__container'>
        <li className='navtab__item'>
          <a
            href='/'
            onClick={e => handleClick(e, props)}
            className='effect-cortain effect-cortain--blue is-selected'
          >
            Todos os semestres
          </a>
        </li>
        <li className='navtab__item'>
          <a
            href='/'
            onClick={e => handleClick(e, props)}
            className='effect-cortain effect-cortain--blue'
          >
            2o Semestre de 2019
          </a>
        </li>
        <li className='navtab__item'>
          <a
            href='/'
            onClick={e => handleClick(e, props)}
            className='effect-cortain effect-cortain--blue'
          >
            1o Semestre de 2020
          </a>
        </li>
      </ul>
    </section>
  );
};
export default NavTab;
