import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import './Main.scss';
import ContentHeader from '../ContentHeader/ContentHeader';
import NavTab from '../NavTab/NavTab';

const Main = props => {
  return (
    <>
      <main className='main'>
        <BreadCrumbs />
        <ContentHeader />
        <NavTab />
        <CardGrid />
      </main>
    </>
  );
};
export default Main;
