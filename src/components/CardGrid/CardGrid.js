import React from 'react';
import Loading from '../Loading/Loading';
import Card from '../Card/Card';
import './CardGrid.scss';
import CardAdd from '../Card/CardAdd';

const CardGrid = props => {
  const { data, isLoading, isError, toggleModal } = props;

  // Handle filter
  const dataFiltered =
    props.filter !== 'Todos os Semestres'
      ? data.filter(item => item.enrollment_semester === props.filter)
      : data;

  // Render Grid
  const Grid = props => {
    return <section className='cardgrid container'>{props.children}</section>;
  };

  // Render Cards
  const Cards = props => {
    const cards = props.data;
    return cards.map((card, index) => {
      return <Card info={card} key={index} />;
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
          <CardAdd toggleModal={toggleModal} />
          <Cards data={dataFiltered} />
        </Grid>
      );
    }
  };
  return <Content />;
};
export default CardGrid;
