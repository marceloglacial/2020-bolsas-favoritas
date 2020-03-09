import React from 'react';
import Button from '../Button/Button';
import './ResultsGrid.scss';

const ResultsGrid = props => {
  const buttonCancelProps = {
    title: 'Cancelar',
    type: 'muted'
  };
  const buttonAddProps = {
    title: 'Adicionar bolsa(s)',
    type: 'primary'
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
        <div className='results-list__item'>
          <div className='results-list__checkbox'>
            <input
              type='checkbox'
              htmlFor='type'
              name='presencial'
              id='presencial'
            />
          </div>
          <div className='results-list__image'>
            <img
              src='https://www.tryimg.com/u/2019/04/16/unip.png'
              alt='name'
            />
          </div>
          <div className='results-list__course'>
            <h3 className='results-list__course--name'>Administração</h3>
            <p className='results-list__course--type'>Bacharelado</p>
          </div>
          <div className='results-list__price'>
            <p>
              Bolsa de
              <strong className='results-list__price--discount'>50%</strong>
            </p>
            <p className='results-list__price--full'>R$ 374/mês</p>
          </div>
        </div>

        <div className='results-list__item'>
          <div className='results-list__checkbox'>
            <input
              type='checkbox'
              htmlFor='type'
              name='presencial'
              id='presencial'
            />
          </div>
          <div className='results-list__image'>
            <img
              src='https://www.tryimg.com/u/2019/04/16/unip.png'
              alt='name'
            />
          </div>
          <div className='results-list__course'>
            <h3 className='results-list__course--name'>Administração</h3>
            <p className='results-list__course--type'>Bacharelado</p>
          </div>
          <div className='results-list__price'>
            <p>
              Bolsa de
              <strong className='results-list__price--discount'>50%</strong>
            </p>
            <p className='results-list__price--full'>R$ 374/mês</p>
          </div>
        </div>
      </div>
      <div className='results-actions'>
        <Button {...buttonCancelProps} />
        <Button {...buttonAddProps} />
      </div>
    </section>
  );
};
export default ResultsGrid;
