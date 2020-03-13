import React from 'react';
import Button from '../Button/Button';
import './ResultsGrid.scss';

const ResultsGrid = props => {
  const { data, toggleModal, setItemsSelected } = props;

  const addItems = () => {
    setItemsSelected(true);
    toggleModal();
  };
  const selectCard = (e, checked) => (data[e.target.id].checked = !checked);

  // Buttons
  const buttonCancelProps = {
    title: 'Cancelar',
    type: 'muted',
    onClick: toggleModal
  };
  const buttonAddProps = {
    title: 'Adicionar bolsa(s)',
    type: 'primary',
    onClick: addItems
  };

  const Items = () => {
    return data.map((item, index) => {
      const {
        enabled,
        price_with_discount,
        discount_percentage,
        university,
        course,
        checked
      } = item;

      if (!enabled) return false;
      return (
        <div className='results-list__item' key={index}>
          <div className='results-list__checkbox'>
            <input
              type='checkbox'
              htmlFor='type'
              id={index}
              onChange={e => selectCard(e, checked)}
              checked={checked}
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
              R$ {price_with_discount}/mês
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
          >
            <option>Nome da faculdade</option>
            <option>Menor Preço</option>
            <option>Maior Preço</option>
            <option>Menor Desconto</option>
            <option>Maior Desconto</option>
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
