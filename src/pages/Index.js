import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Main from '../components/Main/Main';
import '../components/Styles/_base.scss';
import Footer from '../components/Footer/Footer';

const Index = props => {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

export default Index;
