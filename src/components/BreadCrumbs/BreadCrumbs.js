import React from 'react';
import './BreadCrumbs.scss';

const BreadCrumbs = props => {
  return (
    <>
      <section className='breadcrumbs container'>
        <ul className='breadcrumbs__container flex-center'>
          <li className='breadcrumbs__item  hidden-on-mobile'>
            <a href='/' className='breadcrumbs__link'>
              Home
            </a>
          </li>
          <li className='breadcrumbs__item'>
            <a href='/' className='breadcrumbs__link'>
              Minha conta
            </a>
          </li>
          <li className='breadcrumbs__item hidden-on-mobile'>
            Bolsas Favoritas
          </li>
        </ul>
      </section>
    </>
  );
};
export default BreadCrumbs;
