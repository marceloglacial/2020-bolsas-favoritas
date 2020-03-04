import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import './components/Styles/_base.scss';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import axios from 'axios';
import Loading from './components/Loading/Loading';

const App = props => {
  const [data, setData] = useState([]);
  const [url] = useState(process.env.REACT_APP_API_ENDPOINT);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const Content = props => {
    if (isError) return <Loading text={'Something is wrong'} />;
    if (isLoading) {
      return <Loading text={'Loading ...'} />;
    } else {
      return <Main data={props.data} />;
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <Content data={data} />
    </>
  );
};

export default App;
