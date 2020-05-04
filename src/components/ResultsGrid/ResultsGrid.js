import React from 'react';
import Button from '../Button/Button';
import './ResultsGrid.scss';
import formatPrice from '../../functions/formatPrice';
import { sortAlpha, sortHigher, sortLower } from '../../functions/sortArray';

const ResultsGrid = (props) => {
  const {
    cart,
    setCart,
    filters,
    toggleModal,
    addToCart,
    handleSelectedItem,
  } = props;
  const hasItems = cart.find((item) => item.isSelected);

  // Buttons
  const buttonCancelProps = {
    title: 'Cancelar',
    type: 'muted',
    onClick: toggleModal,
  };
  const buttonAddProps = {
    title: 'Adicionar bolsa(s)',
    type: hasItems ? 'primary' : 'disabled',
    onClick: hasItems ? addToCart : undefined,
  };

  // Filter
  let result = cart;
  if (filters.city !== 'all') {
    result = result.filter((item) => item.campus.city === filters.city);
  }
  if (filters.course !== 'all') {
    result = result.filter((item) => item.course.name === filters.course);
  }
  if (filters.kind.length !== 0) {
    result = result.filter((item) => filters.kind.includes(item.course.kind));
  } else {
    result = [];
  }
  if (filters.price !== 'all') {
    result = result.filter((item) => item.price_with_discount <= filters.price);
  }

  // Sort
  const sortCart = (order) => {
    if (order === 'name') setCart(sortAlpha(result));
    if (order === 'lowerPrice')
      setCart(sortLower(result, 'price_with_discount'));
    if (order === 'higherPrice')
      setCart(sortHigher(result, 'price_with_discount'));
    if (order === 'lowerDiscount')
      setCart(sortLower(result, 'discount_percentage'));
    if (order === 'higherDiscount')
      setCart(sortHigher(result, 'discount_percentage'));
  };

  const Items = () => {
    if (result.length === 0)
      return (
        <div className='results-list__item--empty' key={'no-results'}>
          <p>Nenhum resultado encontrado</p>
        </div>
      );

    return result.map((item, index) => {
      const {
        id,
        price_with_discount,
        discount_percentage,
        university,
        course,
        isSelected,
      } = item;
      return (
        <div className='results-list__item' key={index}>
          <div className='results-list__checkbox'>
            <input
              type='checkbox'
              htmlFor='type'
              id={id}
              defaultChecked={isSelected}
              onChange={(e) => handleSelectedItem(e)}
            />
          </div>
          <div className='results-list__image'>
            <img src={university.logo_url} alt={university.name} />
          </div>
          <div className='results-list__course'>
            <h3 className='results-list__course--name'>{course.name}</h3>
            <p className='results-list__course--type'>{course.level}</p>
          </div>
          <div className='results-list__price'>
            <p>
              Bolsa de
              <strong className='results-list__price--discount'>
                {discount_percentage}%
              </strong>
            </p>
            <p className='results-list__price--full'>
              {formatPrice(price_with_discount)}/mês
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <section className='results'>
      <div className='results-header'>
        <div className='results-header__title'>
          <h4>Resultado:</h4>
        </div>
        <div className='results-header__sort'>
          <label
            className='results-header__sort-label'
            htmlFor='results-header__sort-select'
          >
            Ordernar por
          </label>
          <select
            id='results-header__sort-select'
            className='results-header__sort-select'
            onChange={(e) => sortCart(e.target.value)}
          >
            <option value='name'>Nome da faculdade</option>
            <option value='lowerPrice'>Menor Preço</option>
            <option value='higherPrice'>Maior Preço</option>
            <option value='lowerDiscount'>Menor Desconto</option>
            <option value='higherDiscount'>Maior Desconto</option>
          </select>
        </div>
      </div>
      <div className='results-list'>
        <Items />
      </div>
      <div className='results-actions'>
        <Button {...buttonCancelProps} />
        <Button {...buttonAddProps} />
      </div>
    </section>
  );
};
export default ResultsGrid;
