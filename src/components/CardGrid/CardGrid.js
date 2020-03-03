import React from 'react';
import './CardGrid.scss';
import data from '../../api/data.json';

const CardGrid = props => {
  const Card = props => {
    return (
      <section className='card'>
        <div className='card__info'>{props.children}</div>
      </section>
    );
  };

  //   const universities = [
  //     ...new Set(data.map(item => item.university.name))
  //   ].sort();
  //   const cities = [...new Set(data.map(item => item.campus.name))].sort();

  const cards = data.map((item, index) => {
    const {
      university,
      course,
      start_date,
      full_price,
      discount_percentage
    } = item;

    const total =
      (parseFloat(full_price) * parseFloat(discount_percentage)) / 100;

    return (
      <Card key={index}>
        <img src={university.logo_url} alt='' />
        <br />
        {university.name}
        <br />
        {course.name}
        <br />
        {university.score}
        <br />
        {course.kind} - {course.shift}
        <br />
        Início das aulas em {start_date}
        <hr />
        Mensalidade com o Quero Bolsa:
        <br />
        R$: {parseFloat(full_price)}
        <br />
        R$: {total} / mês
      </Card>
    );
  });

  return (
    <>
      <section className='cardgrid'>
        <Card>Adicionar bolsa</Card>
        {cards}
      </section>
    </>
  );
};
export default CardGrid;
