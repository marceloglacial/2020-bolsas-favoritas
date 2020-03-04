import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

const Loading = props => {
  return (
    <>
      <main className='main container'>
        <BreadCrumbs />
        <h3>{props.text}</h3>
      </main>
    </>
  );
};
export default Loading;
