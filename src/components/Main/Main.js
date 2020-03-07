import React, { useState } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import CardGrid from '../CardGrid/CardGrid';
import './Main.scss';
import ContentHeader from '../ContentHeader/ContentHeader';
import NavTab from '../NavTab/NavTab';

const Main = props => {
  const [cardGridFilter, setCardGridFilter] = useState('Todos os Semestres');

  return (
    <>
      <main className='main'>
        <BreadCrumbs />
        <ContentHeader />
        <NavTab setCardGridFilter={setCardGridFilter} {...props} />
        <CardGrid filter={cardGridFilter} {...props} />
      </main>
    </>
  );
};
export default Main;
