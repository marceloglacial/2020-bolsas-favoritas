import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';

const Main = props => {
  return (
    <>
      <main className='main container'>
        <BreadCrumbs />
        <CardGrid {...props} />
      </main>
    </>
  );
};
export default Main;
