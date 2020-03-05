import React from 'react';
import './Card.scss';

const Card = props => {
  const info = props.info;
  const {
    enabled,
    full_price,
    price_with_discount,
    start_date,
    university,
    course
  } = info;

  const Button = props => {
    if (enabled) {
      return <button className='button button--primary'>Ver Oferta</button>;
    } else {
      return (
        <button className='button button--disabled' disabled>
          Indisponível
        </button>
      );
    }
  };

  return (
    <section className='card'>
      <figure className='card__logo'>
        <img src={university.logo_url} alt={university.name} />
      </figure>
      <div className='card__info'>
        <div className='card__university-name'>{university.name}</div>
        <div className='card__course-name'>{course.name}</div>
        <div className='card__university-score'>{university.score}</div>
        <div className='card__course-kind'>
          {course.kind} - {course.shift}
        </div>
        <div className='card__start-date'>
          Início das aulas em: {start_date}
        </div>
        <div className='card__prince'>
          <p className='card__price-title'>Mensalidade com o Quero Bolsa:</p>
          <p className='card__price-full'>R$: {full_price}</p>
          <div className='card__price-discount'>
            <strong>R$ {price_with_discount}</strong> / mês
          </div>
        </div>
        <div className='card__actions'>
          <button className='button button--muted'>Excluir</button>
          <Button />
        </div>
      </div>
    </section>
  );
};
export default Card;
