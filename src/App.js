import React from 'react';
import Header from './components/Header/Header';
import './App.scss';
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

// TODO: Github project
// TODO: Add wakatime log badge
