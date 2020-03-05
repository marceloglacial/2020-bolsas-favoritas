import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import './Main.scss';

const Main = props => {
  return (
    <>
      <main className='main'>
        <BreadCrumbs />
        <CardGrid />
      </main>
    </>
  );
};
export default Main;
