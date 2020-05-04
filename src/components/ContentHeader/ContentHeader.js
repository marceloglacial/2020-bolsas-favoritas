import React from 'react';
import './ContentHeader.scss';

const ContentHeader = () => {
  return (
    <section className='content-header container'>
      <h2 className='content-header__title'>Bolsas favoritas</h2>
      <p className='content-header__description'>
        Adicione bolsas de cursos e faculdades do seu interesse e receba
        atualizações com as melhores ofertas disponíveis.
      </p>
    </section>
  );
};
export default ContentHeader;
