import React from 'react';
import Button from '../Button/Button';
import formatPrice from '../../functions/formatPrice';
import './Card.scss';

const Card = (props) => {
  const { item, removeFromCart } = props;
  const {
    enabled,
    full_price,
    price_with_discount,
    start_date,
    university,
    course,
    id,
  } = item;

  const remove = () => removeFromCart(id);

  const buttonDeleteProps = {
    title: 'Excluir',
    type: 'muted',
    onClick: remove,
  };
  const buttonShowProps = {
    title: 'Ver Ofeta',
    type: 'primary',
    disabled: !enabled,
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
          <p className='card__price-full'>{formatPrice(full_price)}</p>
          <div className='card__price-discount'>
            <strong>{formatPrice(price_with_discount)}</strong> / mês
          </div>
        </div>
        <div className='card__actions'>
          <Button {...buttonDeleteProps} />
          <Button {...buttonShowProps} />
        </div>
      </div>
    </section>
  );
};
export default Card;
