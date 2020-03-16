import React from 'react';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import './CardGrid.scss';
import CardAdd from '../Card/CardAdd';

const CardGrid = props => {
  const { isLoading, isError, toggleModal, cart, removeFromCart } = props;

  // Render Grid
  const Grid = props => {
    return <section className='cardgrid container'>{props.children}</section>;
  };

  // Cards
  const Cards = () => {
    return cart.map((card, index) => {
      return <Card key={index} removeFromCart={removeFromCart} {...card} />;
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
      return (
        <Grid>
          <CardAdd toggleModal={toggleModal} {...props} />
          <Cards />
        </Grid>
      );
    }
  };
  return <Content {...props} />;
};
export default CardGrid;
