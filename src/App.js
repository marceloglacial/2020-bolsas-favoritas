import React from 'react';
import Header from './components/Header/Header';
import './components/Styles/_base.scss';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

const App = props => {
  return (
    <>
      <Header />
      <Nav />
      <Main />
    </>
  );
};

export default App;
