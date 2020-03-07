import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Main from '../components/Main/Main';
import '../components/Styles/_base.scss';
import Footer from '../components/Footer/Footer';

const Index = props => {
  // Set states
  const [data, setData] = useState([]);
  const [url] = useState(process.env.REACT_APP_API_ENDPOINT);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Load data
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

  const dataProps = {
    data: data,
    isLoading: isLoading,
    isError
  };

  return (
    <>
      <Header />
      <Nav />
      <Main {...dataProps} />
      <Footer />
    </>
  );
};

export default Index;
