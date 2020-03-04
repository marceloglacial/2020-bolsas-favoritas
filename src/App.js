import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import './components/Styles/_base.scss';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import axios from 'axios';
import dataLocal from './api/data.json';

const App = props => {
  const [data, setData] = useState([]);
  const [url] = useState('https://testapi.io/api/glacial/scholarship');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsError(false);
  //     setIsLoading(false);

  //     try {
  //       const result = await axios(url);
  //       setData(result.data);
  //     } catch (error) {
  //       console.log(error);
  //       setIsError(true);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [url]);

  const Content = props => {
    if (isError) return <h1>Something is wrong ...</h1>;
    if (isLoading) {
      return (
        <section className='container'>
          <h1>Loading ...</h1>
        </section>
      );
    } else {
      return <Main data={props.data} />;
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <Content data={dataLocal} />
    </>
  );
};

export default App;
