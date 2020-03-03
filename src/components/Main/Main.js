import React from 'react';
import CardGrid from '../CardGrid/CardGrid';

const Main = props => {
  return (
    <>
      <main className='main container'>
        <section className='page__description'>
          <h2>Bolsas Favoritas</h2>
          <p>Adicione bolsas</p>
        </section>
        <CardGrid />
      </main>
    </>
  );
};
export default Main;
