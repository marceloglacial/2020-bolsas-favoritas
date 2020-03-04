import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Main from '../components/Main/Main';
import '../components/Styles/_base.scss';

const Index = props => {
  return (
    <>
      <Header />
      <Nav />
      <Main />
    </>
  );
};

export default Index;
