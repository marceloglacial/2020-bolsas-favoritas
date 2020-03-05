import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import './CardGrid.scss';
import CardAdd from '../Card/CardAdd';

const CardGrid = props => {
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

  const Grid = props => {
    return <section className='cardgrid container'>{props.children}</section>;
  };

  const Cards = props => {
    const cards = props.data;
    return cards.map((card, index) => {
      return <Card info={card} key={index} />;
    });
  };

  const Content = props => {
    if (isError)
      return (
        <Grid>
          <Loading text={'Something is wrong'} />
        </Grid>
      );
    if (isLoading) {
      return (
        <Grid>
          <Loading text={'Loading ...'} />
        </Grid>
      );
    } else {
      return (
        <Grid>
          <CardAdd {...props} />
          <Cards data={data} />
        </Grid>
      );
    }
  };

  //   const universities = [
  //     ...new Set(data.map(item => item.university.name))
  //   ].sort();
  //   const cities = [...new Set(data.map(item => item.campus.name))].sort();

  return <Content />;
};
export default CardGrid;
