import React from 'react';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import './CardGrid.scss';
import CardAdd from '../Card/CardAdd';

const CardGrid = props => {
  const { data, setData, isLoading, isError, toggleModal } = props;

  // Render Grid
  const Grid = props => {
    return <section className='cardgrid container'>{props.children}</section>;
  };

  // Cards
  const Cards = () => {
    return data.map((card, index) => {
      return card.checked ? (
        <Card id={index} data={data} setData={setData} {...card} key={index} />
      ) : (
        false
      );
    });
  };

  // Define loading stages
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
      const cardsProps = {
        data,
        setData
      };
      return (
        <Grid>
          <CardAdd toggleModal={toggleModal} />
          <Cards {...cardsProps} />
        </Grid>
      );
    }
  };
  return <Content />;
};
export default CardGrid;
