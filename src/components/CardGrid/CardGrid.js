import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import './CardGrid.scss';

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

  const Card = props => {
    return (
      <section className='card'>
        <div className='card__info'>{props.children}</div>
      </section>
    );
  };

  const Content = props => {
    if (isError) return <Loading text={'Something is wrong'} />;
    if (isLoading) {
      return <Loading text={'Loading ...'} />;
    } else {
      return <Card data={props.data} />;
    }
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
