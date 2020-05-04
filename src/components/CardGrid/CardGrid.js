import React from 'react';
import Section from '../Section/Section';
import Card from '../Card/Card';
import CardAdd from '../Card/CardAdd';
import './CardGrid.scss';

const CardGrid = (props) => {
  const Cards = (props) => {
    return props.data.map((item, index) => {
      if (!item.isSelected) return false;
      return <Card item={item} {...props} key={index} />;
    });
  };

  return (
    <Section name='cardgrid'>
      <CardAdd {...props} />
      <Cards {...props} />
    </Section>
  );
};
export default CardGrid;
